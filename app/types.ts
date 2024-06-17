type JobDetailType = {
  _id: number;
  apply: string;
  company: string;
  contract: string;
  description: string;
  location: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
  website: string;
};

type ApplyData = {
  status: string;
  data: {
    name: string;
    "last-name": string;
    email: string;
    phone: string;
    resume: File | null;
    "cover-letter": string;
  };
};

type Input = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  className?: string;
  grid?: string;
  isTextarea?: boolean;
  validity: (val: string) => boolean;
  required: boolean;
};
