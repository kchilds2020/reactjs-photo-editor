import React, {useState} from 'react'
import styles from './styles.module.css'

export const FileUpload = () => {

  const [file, setFile] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    reader.onload = (e) => {
      setFile(e.target.result)
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  return (
    <div>
      <input type='file' onChange={handleChange}/>
      {file !== '' ? <img src={file} alt='fileimg'/> : <div>no file</div> }
    </div>
    )
}
