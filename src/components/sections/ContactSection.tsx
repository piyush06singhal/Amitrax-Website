import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_IDENTITY } from '../../data/companyData';
import { Button } from '../ui/Button';

interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  inquiryType: 'General inquiry' | 'Project discussion' | 'Design collaboration' | 'Joining / Careers';
  problemStatement: string;
}
type SubmitState = 'idle' | 'sending' | 'success' | 'error';
type FieldErrors = Partial<Record<keyof ContactFormData, string>>;
const EMPTY_FORM: ContactFormData = { fullName: '', email: '', organization: '', inquiryType: 'Project discussion', problemStatement: '' };
const INQUIRY_OPTIONS: ContactFormData['inquiryType'][] = ['Project discussion', 'Design collaboration', 'General inquiry', 'Joining / Careers'];
const INPUT_CLASS = 'w-full min-w-0 rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-base text-slate-950 outline-none transition-colors focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 aria-[invalid=true]:border-rose-600 dark:border-white/20 dark:bg-white/5 dark:text-white dark:focus:border-cyan-300';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const submittingRef = useRef(false);

  useEffect(() => { if (submitState === 'success') successRef.current?.focus(); }, [submitState]);

  const update = (field: keyof ContactFormData, value: string) => {
    setFormData(previous => ({ ...previous, [field]: value }));
    setErrors(previous => ({ ...previous, [field]: undefined }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;
    const nextErrors: FieldErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your name.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) || formRef.current?.querySelector<HTMLInputElement>('#contact-email')?.validity.typeMismatch) nextErrors.email = 'Please enter a valid email address.';
    if (!formData.problemStatement.trim()) nextErrors.problemStatement = 'Please share a little about your inquiry.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const firstField = Object.keys(nextErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }
    submittingRef.current = true;
    setSubmitState('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'We could not confirm your submission.');
      setSubmitState('success');
    } catch (error) {
      setSubmitState('error');
      setErrorMsg(error instanceof Error ? error.message : 'We could not confirm your submission.');
    } finally {
      submittingRef.current = false;
    }
  };

  const fieldError = (field: keyof ContactFormData) => errors[field] ? <p id={`contact-${field}-error`} className="mt-2 text-sm text-rose-700 dark:text-rose-300">{errors[field]}</p> : null;

  return (
    <section id="contact" className="studio-section border-t border-slate-900/10 dark:border-white/10">
      <div className="studio-container grid items-start gap-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-20">
        <div className="min-w-0">
          <div role="status" aria-live="polite" className="sr-only">{submitState === 'sending' ? 'Submitting your inquiry…' : submitState === 'success' ? 'Your inquiry has been accepted by the website.' : ''}</div>
          {submitState === 'success' ? (
            <div className="py-8">
              <CheckCircle2 size={36} className="mb-6 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
              <h2 ref={successRef} tabIndex={-1} className="font-display text-3xl text-slate-950 outline-none dark:text-white">Thank you, {formData.fullName}.</h2>
              <p className="studio-copy mt-4">Your inquiry has been accepted by the website. This confirmation does not verify email delivery. You can also reach us directly using the email address below.</p>
              <button type="button" className="mt-6 min-h-11 text-base text-cyan-700 underline underline-offset-4 dark:text-cyan-300" onClick={() => { setFormData(EMPTY_FORM); setSubmitState('idle'); setErrorMsg(''); setErrors({}); requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>('#contact-name')?.focus()); }}>Start another inquiry</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-title" aria-busy={submitState === 'sending'} className="space-y-7">
              <div><h2 id="contact-form-title" className="font-display text-2xl tracking-tight text-slate-950 dark:text-white">Tell us about it.</h2><p id="contact-required" className="mt-2 text-sm text-slate-600 dark:text-slate-400">Fields marked * are required.</p></div>
              <fieldset disabled={submitState === 'sending'} className="min-w-0 space-y-7 disabled:opacity-70">
                <fieldset className="min-w-0">
                  <legend className="mb-3 text-base font-medium text-slate-900 dark:text-slate-100">What brings you here?</legend>
                  <div className="grid gap-2 sm:grid-cols-2">{INQUIRY_OPTIONS.map(type => <label key={type} className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border px-3 py-3 text-sm ${formData.inquiryType === type ? 'border-cyan-700 bg-cyan-700/5 text-slate-950 dark:border-cyan-300 dark:bg-cyan-300/5 dark:text-white' : 'border-slate-300 text-slate-700 dark:border-white/20 dark:text-slate-300'}`}><input type="radio" name="inquiryType" value={type} checked={formData.inquiryType === type} onChange={() => update('inquiryType', type)} className="size-4 shrink-0 accent-cyan-700 dark:accent-cyan-300" />{type}</label>)}</div>
                </fieldset>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="min-w-0"><label htmlFor="contact-name" className="mb-2 block text-base font-medium text-slate-900 dark:text-slate-100">Your name *</label><input id="contact-name" name="fullName" autoComplete="name" required value={formData.fullName} onChange={e => update('fullName', e.target.value)} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined} className={INPUT_CLASS} />{fieldError('fullName')}</div>
                  <div className="min-w-0"><label htmlFor="contact-email" className="mb-2 block text-base font-medium text-slate-900 dark:text-slate-100">Email address *</label><input id="contact-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={e => update('email', e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined} className={INPUT_CLASS} />{fieldError('email')}</div>
                </div>
                <div><label htmlFor="contact-organization" className="mb-2 block text-base font-medium text-slate-900 dark:text-slate-100">Organization <span className="font-normal text-slate-500 dark:text-slate-400">(optional)</span></label><input id="contact-organization" name="organization" autoComplete="organization" value={formData.organization} onChange={e => update('organization', e.target.value)} className={INPUT_CLASS} /></div>
                <div><label htmlFor="contact-message" className="mb-2 block text-base font-medium text-slate-900 dark:text-slate-100">What do you have in mind? *</label><p id="contact-message-hint" className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">A brief outline is enough. Goals, timing, and any useful context are welcome.</p><textarea id="contact-message" name="problemStatement" required rows={5} value={formData.problemStatement} onChange={e => update('problemStatement', e.target.value)} aria-invalid={!!errors.problemStatement} aria-describedby={`contact-message-hint${errors.problemStatement ? ' contact-problemStatement-error' : ''}`} className={`${INPUT_CLASS} resize-y leading-relaxed`} />{fieldError('problemStatement')}</div>
                <Button type="submit" size="lg" disabled={submitState === 'sending'} iconRight={<ArrowUpRight size={18} aria-hidden="true" />}>{submitState === 'sending' ? 'Submitting…' : 'Send inquiry'}</Button>
              </fieldset>
              {Object.keys(errors).some(key => errors[key as keyof ContactFormData]) && <p role="alert" className="text-sm text-rose-700 dark:text-rose-300">Please check the highlighted fields.</p>}
              {submitState === 'error' && <div role="alert" className="border-l-2 border-rose-600 pl-4 text-base leading-relaxed text-rose-700 dark:text-rose-300"><p>{errorMsg} Your form details are still here.</p><p className="mt-2">You can also email <a className="break-all underline underline-offset-4" href={`mailto:${COMPANY_IDENTITY.contactEmail}`}>{COMPANY_IDENTITY.contactEmail}</a>.</p></div>}
            </form>
          )}
        </div>
        <aside className="min-w-0 border-t border-slate-900/15 pt-8 dark:border-white/15 lg:border-t-0 lg:pt-0">
          <p className="studio-kicker">Prefer email?</p>
          <a href={`mailto:${COMPANY_IDENTITY.contactEmail}`} className="mt-3 inline-flex min-h-11 max-w-full items-center break-all font-display text-xl text-slate-950 underline decoration-cyan-600/50 underline-offset-8 hover:text-cyan-700 dark:text-white dark:hover:text-cyan-300">{COMPANY_IDENTITY.contactEmail}</a>
          <div className="mt-10 border-t border-slate-900/15 pt-7 dark:border-white/15"><h2 className="font-display text-xl text-slate-950 dark:text-white">Start with the context.</h2><p className="studio-copy mt-3">You don’t need a finished brief. Tell us what you want to improve and where you’re getting stuck.</p><p className="studio-copy mt-4">From there, we can discuss the fit, scope, and a useful next step.</p></div>
        </aside>
      </div>
    </section>
  );
};
