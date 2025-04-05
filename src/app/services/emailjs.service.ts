import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailjsService {
  private readonly EMAILJS_USER_ID = 'cIv3oxF8WA4v1kpox';
  private readonly EMAILJS_SERVICE_ID = 'service_hcjol1p';
  private readonly EMAILJS_TEMPLATE_ID = 'template_hr0qchh';

  constructor() {}

  sendEmail(
    name: string,
    email: string,
    phone: number,
    affair: string,
    comment: string
  ): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        from_phone: phone,
        from_affair: affair,
        message: comment,
      },
      this.EMAILJS_USER_ID
    );
  }
}
