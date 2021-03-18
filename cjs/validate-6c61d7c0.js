'use strict';

async function ValidateInput(root) {
  const inputs = root.querySelectorAll("ks-input-text, ks-input-textarea, ks-input-check, ks-input-number, ks-input-date, ks-input-select");
  let valid = true;
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    await input.Validate();
    if (await input.IsValid() == false) {
      valid = false;
    }
  }
  return valid;
}

exports.ValidateInput = ValidateInput;
