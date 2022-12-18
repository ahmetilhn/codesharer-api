import { Document } from 'mongoose';
import LanguageType from './language.type';

interface IWorkspace extends Document {
  code: string;
  file_name: string;
  language: LanguageType;
  view_count?: number;
}
export default IWorkspace;
