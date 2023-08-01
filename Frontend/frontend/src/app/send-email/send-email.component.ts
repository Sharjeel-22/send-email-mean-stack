import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '../service/send-email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.isEmpty();
  }
  isEmpty() {
    this.form = new FormGroup({
      recipient: new FormControl ('', [Validators.email, Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]),
      subject:new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }
  onSubmit(): void {
    const data = {
      recipient:this.form.value.recipient,
      subject:this.form.value.subject,
      message:this.form.value.message
    }
    // this.sendEmailService.sendEamil(data).subscribe((res:any) => {
    //   console.log('Form Values :: ',data);
    // })
    console.log('Form Values :: ',this.form);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Email Sent to Recipient',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
