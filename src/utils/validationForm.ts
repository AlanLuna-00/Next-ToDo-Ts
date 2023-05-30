interface FormValues {
  title: string;
  description: string;
  priority: string;
  day: string;
  hour: string;
}

const validateForm = ({
  title,
  description,
  priority,
  day,
  hour,
}: FormValues) => {
  let isValid = true;

  const newErrors = {
    title: "",
    description: "",
    priority: "",
    day: "",
    hour: "",
  };

  if (!title?.trim()) {
    newErrors.title = "Title is required";
    isValid = false;
  } else if (title.trim().length < 3) {
    newErrors.title = "Title should be at least 3 characters";
    isValid = false;
  }

  if (!description?.trim()) {
    newErrors.description = "Description is required";
    isValid = false;
  }

  if (!priority) {
    newErrors.priority = "Priority is required";
    isValid = false;
  }

  if (!day) {
    newErrors.day = "Day is required";
    isValid = false;
  }

  if (!hour) {
    newErrors.hour = "Hour is required";
    isValid = false;
  }

  return { isValid, errors: newErrors };
};

export default validateForm;
