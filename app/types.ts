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
  name: string;
  "last-name": string;
  email: string;
  phone: string;
  resume: File;
  "cover-letter": string;
};
