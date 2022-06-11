import React from 'react';

import placeholder from '../../assets/images/placeholder.png';

const defaultAlt = 'placeholder.png';

function InputFile({ onChange, value, ...props }) {
  const inputRef = React.createRef(null);
  const [image, setImg] = React.useState({ alt: defaultAlt, src: placeholder });
  const loadSrcFromFile = file => {
    if (!file) {
      setImg({ alt: defaultAlt, src: placeholder });
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setImg({ alt: file.name, src: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = ev => {
    const file = ev.target.files[0];
    loadSrcFromFile(file);
    onChange(ev);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
        {...props}
      />
      <img
        onClick={handleClick}
        src={image.src}
        alt={image.alt}
        width="200"
        height="200"
        style={{ objectFit: 'contain' }}
      />
    </>
  );
}

export default InputFile;
