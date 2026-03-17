
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface MLConcept {
  id: string;
  title: string;
  description: string;
  analogy: string;
  icon: string;
  color: string;
}
