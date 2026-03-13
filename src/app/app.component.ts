import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FNLabel } from "fn-label";
import { FNInput, FNInputBase } from "fn-input";
import { TranslateModule } from "@ngx-translate/core";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { inject } from "@angular/core";
import { FNToast, ToastService } from "fn-toast";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FNLabel,
    TranslateModule,
    FNInput,
    ReactiveFormsModule,
    FNToast,
  ],
  providers: [],
  templateUrl: "./app.component.html",
  styles: [
    `
      :host ::ng-deep fn-label .fn-label {
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {
  title = "UI Testing App";
  form: FormGroup;
  private toastService = inject(ToastService);

  showSuccess() {
    this.toastService.success("Success Toast Triggered!", "Success");
  }

  showError() {
    this.toastService.error("Error Toast Triggered!", "Error");
  }

  showWarn() {
    this.toastService.warn("Warning Toast Triggered!", "Warning");
  }

  showInfo() {
    this.toastService.info("Info Toast Triggered!", "Info");
  }

  clearAll() {
    this.toastService.clear();
  }

  // 1. Styling Props Demo
  stylingProps: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "stylingProps",
    label: "Custom Styled Label",
    color: "#e11d48", // Rose 600
    labelSize: "18px",
    valueColor: "#2563eb", // Blue 600
    valueSize: "16px",
    placeholder: "Styled text and label",
  };

  // 2. Success Border & Optional
  successBorderProps: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "successBorder",
    label: "Valid Field (Success Border)",
    hasSuccessBorder: true,
    required: false,
    hideOptional: true,
    helperText: "Green border appears when valid",
  };

  // 3. Alphanumeric restriction
  alphanumericProps: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "alphanumeric",
    label: "Username",
    isAlphanumeric: true,
    placeholder: "Only letters and numbers allowed",
  };

  // 4. Password with Weak Label
  passwordWeakLabel: FNInputBase = {
    fieldType: "FNInput",
    type: "password",
    name: "passwordWeak",
    label: "Password with Custom Feedback",
    feedback: true,
    toggleMask: true,
    weakLabel: "Very Weak!",
    mediumLabel: "Average",
    strongLabel: "Robust",
  };

  // 5. Currency with Decimal control
  currencyAdvanced: FNInputBase = {
    fieldType: "FNInput",
    type: "number",
    name: "currencyAdvanced",
    label: "Advanced Currency (MYR)",
    isCurrency: true,
    currency: "MYR",
    minFractionDigits: 3,
    maxFractionDigits: 3,
  };

  // Existing Text Inputs
  textBasic: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textBasic",
    label: "Full Name",
    placeholder: "Enter your full name",
    required: true,
  };

  textWithAffix: FNInputBase = {
    fieldType: "FNInput",
    type: "email",
    name: "textEmail",
    label: "Email Address",
    placeholder: "user@example.com",
    prefix: {
      icon: 'home',
    },
    suffix: {
      text: "@gmail.com",
      onClick: () => console.log("Suffix clicked"),
    },
  };

  textDisabled: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textDisabled",
    label: "Reference Code (Read Only)",
    value: "REF-123456",
    disabled: true,
  };

  textFloatIn: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textFloatIn",
    label: "Inner Label",
    floatLabelVariant: "in",
    placeholder: "Style: in",
  };

  textFloatOver: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textFloatOver",
    label: "Over Label",
    floatLabelVariant: "over",
    placeholder: "Style: over",
  };

  textFloatOn: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textFloatOn",
    label: "On Label",
    floatLabelVariant: "on",
    placeholder: "Style: on",
  };

  passwordBasic: FNInputBase = {
    fieldType: "FNInput",
    type: "password",
    name: "passwordBasic",
    label: "Secure Password",
  };

  passwordFull: FNInputBase = {
    fieldType: "FNInput",
    type: "password",
    name: "passwordFull",
    label: "Better Password",
    toggleMask: true,
    feedback: true,
    mediumLabel: "Getting there...",
    strongLabel: "Perfect!",
  };

  passwordGenerate: FNInputBase = {
    fieldType: "FNInput",
    type: "password",
    name: "passwordGenerate",
    label: "API Secret Key",
    isCopyText: true,
    hasGenerateKey: true,
    onGenerateKey: () => {
      const newKey = "Generated-Key-" + Math.random().toString(36).substring(7);
      this.form.get("passwordGenerate")?.setValue(newKey);
      this.toastService.success("New API Key generated successfully!", "Key Generated");
    },
  };

  numberBasic: FNInputBase = {
    fieldType: "FNInput",
    type: "number",
    name: "numberBasic",
    label: "Quantity",
    showButtons: true,
    min: 0,
    max: 100,
    step: 5,
  };

  numberCurrency: FNInputBase = {
    fieldType: "FNInput",
    type: "number",
    name: "numberCurrency",
    label: "Donation Amount",
    mode: "currency",
    currency: "USD",
    locale: "en-US",
    useGrouping: true,
    minFractionDigits: 2,
  };

  numberVertical: FNInputBase = {
    fieldType: "FNInput",
    type: "number",
    name: "numberVertical",
    label: "Score Adjustment",
    showButtons: true,
    buttonLayout: "vertical",
    incrementButtonIcon: "pi pi-plus",
    decrementButtonIcon: "pi pi-minus",
  };

  textareaLarge: FNInputBase = {
    fieldType: "FNInput",
    type: "textarea",
    name: "biography",
    label: "About You",
    placeholder: "Tell us about yourself...",
    rows: 5,
    maxLength: 500,
  };

  visibilityTrigger: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "trigger",
    label: "Type 'show' to reveal next field",
    placeholder: "Try typing 'show'",
  };

  visibilityConditional: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "hiddenField",
    label: "I was hidden!",
    value: "Surprise!",
    visibilityCondition: {
      dependsOn: "trigger",
      showWhen: "show",
    },
  };

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      stylingProps: [""],
      successBorder: ["Valid Text"],
      alphanumeric: [""],
      passwordWeak: [""],
      currencyAdvanced: [123.456],
      textBasic: ["", [Validators.required]],
      textEmail: [""],
      textDisabled: [{ value: "REF-123456", disabled: true }],
      textFloatIn: [""],
      textFloatOver: [""],
      textFloatOn: [""],
      passwordBasic: [""],
      passwordFull: [""],
      passwordGenerate: [""],
      numberBasic: [10],
      numberCurrency: [50],
      numberVertical: [0],
      biography: [""],
      trigger: [""],
      hiddenField: ["Surprise!"],
    });
  }
}
