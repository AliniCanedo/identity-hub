export interface FileUploadProps {
  file: File | null;

  onChange: (file: File | null) => void;

  accept?: string;
}