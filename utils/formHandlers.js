export const handleSubmit = async (
  e,
  formData,
  setErrors,
  setServerMessage,
  setIsLoading,
  setFormData
) => {
  e.preventDefault();

  setIsLoading(true);

  // Validation state
  let valid = true;
  let newErrors = { username: "", email: "", password: "" };

  // Username validation
  if (!formData.username) {
    valid = false;
    newErrors.username = "Username is required.";
  }

  // Email validation with regex
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!formData.email) {
    valid = false;
    newErrors.email = "Please enter your email.";
  } else if (!emailPattern.test(formData.email)) {
    valid = false;
    newErrors.email = "Please enter a valid email.";
  }

  // Strong password validation with regex
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!formData.password) {
    valid = false;
    newErrors.password = "Password is required.";
  } else if (!passwordPattern.test(formData.password)) {
    valid = false;
    newErrors.password =
      "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.";
  }

  setErrors(newErrors);

  if (valid) {
    // Proceed with form submission (e.g., sending data to server)

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setServerMessage(data.message); // Set success message
        setFormData({ username: "", email: "", password: "" });
      } else {
        setServerMessage(data.error || "Something went wrong. Try it later."); // Set error message
      }
    } catch (error) {
      setServerMessage("Failed to connect to the server.");
    }
  }
};
