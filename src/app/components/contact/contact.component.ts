import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { EmailjsService } from 'src/app/services/emailjs.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    affair: ['', [Validators.required, Validators.minLength(5)]],
    comment: ['', [Validators.required, Validators.minLength(10)]],
  });
  constructor(
    private fb: FormBuilder,
    private emailjsService: EmailjsService
  ) {}

  isNotValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';

        case 'minlength':
          return `Minimum ${errors['minlength'].requiredLength} caracters.`;
      }
    }
    return null;
  }

  enviarCorreo() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    Notiflix.Loading.pulse('Enviando...');
    if (this.myForm.valid) {
      const { name, email, phone, affair, comment } = this.myForm.value;

      this.emailjsService.sendEmail(name, email, phone, affair, comment).then(
        (response) => {
          console.log('Correo enviado exitosamente', response);
          Notiflix.Loading.remove();
          Notiflix.Notify.success('Correo enviado exitosamente');
          // Realiza acciones adicionales después de enviar el correo
        },
        (error) => {
          console.error('Error al enviar el correo', error);
          Notiflix.Report.failure(
            'Fallo al enviar correo',
            error,
            'Volver a intentarlo'
          );
          Notiflix.Loading.remove();
        }
      );
    }
    this.myForm.reset({});
  }
}
