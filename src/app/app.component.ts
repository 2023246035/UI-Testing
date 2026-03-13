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
import { FNFieldMessage } from "fn-field-message";

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
    FNFieldMessage,
  ],
  providers: [],
  templateUrl: "./app.component.html",
  styles: [
    `
      :host ::ng-deep fn-label .fn-label {
        width: 100%;
      }
      :host ::ng-deep .cursor-not-allowed {
        cursor: pointer !important;
        opacity: 1 !important;
      }
    `,
  ],
})
export class AppComponent {
  title = "Component Showcase";
  form: FormGroup;
  private readonly fb = inject(FormBuilder);
  public toastService = inject(ToastService);

  // --- FN-LABEL VARIETIES ---
  labelBasic = { label: "Standard Label" };
  labelRequired = { label: "Required Field", required: true };
  labelCustomStyle = {
    label: "Custom Styled Label",
    color: "#e11d48",
    labelSize: "18px",
    fontWeight: "bold",
  };
  labelWithHelper = {
    label: "Label with Helper",
    helperText: "This provides additional context.",
  };

  // --- FN-INPUT VARIETIES ---

  // 1. Text Inputs
  textBasic: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textBasic",
    label: "Basic Text Input",
    placeholder: "Type something...",
    required: true,
  };

  textWithIcons: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textIcons",
    label: "Input with Affixes",
    prefix: { icon: "home" },
    suffix: { text: ".com" },
  };

  textFloatIn: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textFloatIn",
    label: "Float Label: In",
    floatLabelVariant: "in",
  };

  textFloatOver: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "textFloatOver",
    label: "Float Label: Over",
    floatLabelVariant: "over",
  };

  // 1.1 New 0.0.18 Features
  addressInput: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "address",
    label: "Address (Alphanumeric + Symbols)",
    isAlphanumeric: true,
    isAddressLine: true,
    placeholder: "Allows ( ) / , and alphanumeric",
  };

  statusSuccessInput: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "statusSuccess",
    label: "Success Status Label",
    statusLabel: "Success",
    value: "Positive State",
  };

  statusWarningInput: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "statusWarning",
    label: "Warning Status Label",
    statusLabel: "Warning",
    value: "Check this field",
  };

  // 2. Password Inputs
  passwordSecure: FNInputBase = {
    fieldType: "FNInput",
    type: "password",
    name: "passwordSecure",
    label: "Secure Password",
    toggleMask: true,
    feedback: true,
  };

  passwordGenerate: any = {
    fieldType: "FNInput",
    type: "password",
    name: "passwordGenerate",
    label: "API Key Generator",
    isCopyText: true,
    hasGenerateKey: true,
    toggleMask: true,
    onGenerateKey: () => {
      const newKey = "key_" + Math.random().toString(36).substring(7);
      this.form.get("passwordGenerate")?.setValue(newKey);
      this.toastService.success("New key generated!", "Success");
    },
    onCopy: () => this.toastService.info("Key copied to clipboard", "Copied"),
  };

  // 3. Number & Currency
  numberSpinners: FNInputBase = {
    fieldType: "FNInput",
    type: "number",
    name: "numberSpinners",
    label: "Quantity with Spinners",
    showButtons: true,
    min: 0,
    max: 100,
  };

  currencyInput: FNInputBase = {
    fieldType: "FNInput",
    type: "number",
    name: "currencyInput",
    label: "Price (USD)",
    isCurrency: true,
    currency: "USD",
    locale: "en-US",
  };

  // 4. Textarea
  textareaInput: FNInputBase = {
    fieldType: "FNInput",
    type: "textarea",
    name: "description",
    label: "Long Description",
    placeholder: "Enter details here...",
    rows: 4,
  };

  // --- TOAST TRIGGERS ---
  showSuccess() {
    this.toastService.success("Operation completed successfully!", "Success");
  }
  showError() {
    this.toastService.error("An unexpected error occurred.", "Error");
  }
  showWarn() {
    this.toastService.warn("Please check your input.", "Warning");
  }
  showInfo() {
    this.toastService.info("This is an informative message.", "Information");
  }

  // --- FN-FIELD-MESSAGE VARIETIES ---
  fieldMessageConfig: any = {
    name: "testField",
    label: "Field with Validation",
    helperText: "This is a helper text that appears when no errors exist.",
    errors: {
      required: "This field is absolutely mandatory.",
      minlength: "Minimum 8 characters please!",
    },
  };

  get testControl() {
    return this.form.get("textBasic") as any;
  }

  constructor() {
    this.form = this.fb.group({
      textBasic: ["", [Validators.required]],
      textIcons: [""],
      textFloatIn: [""],
      textFloatOver: [""],
      address: [""],
      statusSuccess: [""],
      statusWarning: [""],
      passwordSecure: [""],
      passwordGenerate: [""],
      numberSpinners: [5],
      currencyInput: [99.99],
      description: [""],
    });
  }
}
