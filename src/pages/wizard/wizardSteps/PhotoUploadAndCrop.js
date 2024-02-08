import React, {useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import './PhotoUploadAndCrop.css'
import { IconButton } from '@mui/material';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import DeleteIcon from '@mui/icons-material/Delete';

const PhotoUploadAndCrop = ({ setCroppedImages, croppedImages }) => {

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => {return {data:URL.createObjectURL(file), rotation:0, croppedData:null}});
    setCroppedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    noClick: false,
    noKeyboard: true,
    onDrop,
  });

  const newEditors = [];

  const handleSave = (index) => {
    let data = newEditors[index].getImageScaledToCanvas().toDataURL('image/jpeg');
    let newImages = [...croppedImages];
    newImages[index].croppedData = data;
    setCroppedImages(newImages);
  };

  const handleRotate = (index, degrees =90) => {
    let newImages = [...croppedImages]
    newImages[index].rotation += degrees;
    // TODO: Image scaling should be done here
    setCroppedImages(newImages);
  };

  const handleDelete = (index) => {
    let newImages = [...croppedImages];
    newImages.splice(index, 1);
    setCroppedImages(newImages);
  };

  return (
    <div>
      <div {...getRootProps()} className = 'dropZone'>
        <input {...getInputProps()} />
        <p>Drag & drop or click to select images</p>
      </div>

      {croppedImages.map((image, index) => (
        <div key={index}>
          <AvatarEditor style ={{width:264, height: 148}} onMouseUp = {() => {handleSave(index)}}
            ref={(editor) => {
              newEditors[index] = editor;
              //handleSave();
            }}
            image={image.data ? image.data : image}
            width={1600}
            height={900}
            border={15}
            color={[255, 255, 255, 0.6]}
            scale={1}
            rotate={image.rotation}
          />
                    <IconButton
            onClick={() => handleRotate(index)}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <RotateRightIcon />
            </IconButton>
            <IconButton
            onClick={() => handleDelete(index)}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default PhotoUploadAndCrop;