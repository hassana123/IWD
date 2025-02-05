import supabase from "../../superbaseConfig";

// Validation function
const validateFormData = (data) => {
  const errors = {};
  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'Full Name must be at least 3 characters long.';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format.';
  }
  if (!data.phone || !/^\d{10,15}$/.test(data.phone)) {
    errors.phone = 'Phone number must be 10-15 digits long.';
  }
  if (!data.areaOfInterest || data.areaOfInterest.length === 0) {
    errors.areaOfInterest = 'Please select at least one area of interest.';
  }
  if (!data.reason || data.reason.trim().length < 10) {
    errors.reason = 'Reason must be at least 10 characters long.';
  }
  return errors;
};

export const submitVolunteerApplication = async (formData) => {
  const errors = validateFormData(formData);
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }
console.log(formData);

  const { data, error } = await supabase.from('volunteers').insert([
    {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      area_of_interest: formData.areaOfInterest,
      reason: formData.reason,
      created_at: new Date(),
    },
  ]);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
};
