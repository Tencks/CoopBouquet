import { Component } from '@angular/core';
import { SendMailsService } from '../../core/service/mails/send-mails.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-contacto',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  formulario: FormGroup;
  enviado = false;
  error = '';

  constructor(private fb: FormBuilder, private contactoService: SendMailsService) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      mensaje: ['', Validators.required]
    });
  }

  enviar() {
    if (this.formulario.valid) {
      this.contactoService.enviarMensaje(this.formulario.value).subscribe({
        next: () => {
          this.enviado = true;
          this.formulario.reset();
        },
        error: (err) => {
          console.error('Error enviando el mensaje:', err);
          this.error = 'Hubo un error al enviar el mensaje';
        }
      });
    }
  }
}