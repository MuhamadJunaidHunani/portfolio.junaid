export const validateForm = (formData) => {
  const errors = {};
  if (!formData.name) errors.name = "Name is required.";
  if (!formData.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email format.";
  }
  if (!formData.message) errors.message = "Message cannot be empty.";
  return errors;
};
