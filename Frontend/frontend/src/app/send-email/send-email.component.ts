import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '../service/send-email.service';

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
    this.form = this.formBuilder.group({
      to: ['', [Validators.email, Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit(): void {
    const data = {
      to:this.form.value.to,
      subject:this.form.value.subject,
      message:this.form.value.message
    }
    // this.sendEmailService.sendEamil(data).subscribe((res:any) => {
    //   console.log('Form Values :: ',data);
    // })
    console.log('Form Values :: ',this.form);
  }
}
