import React from 'react';

const SocialButton = ({ redsocial1, redsocial2, redsocial3 }) => {
  const rrssCircle = 'fa-2xl d-flex align-items-center m-2 border border-black rounded-circle';

  return (
    <div className="d-flex justify-content-around">
      <button className={`btn btn-light fa-brands fa-${redsocial1} ${rrssCircle}`} type="submit"></button>
      <button className={`btn btn-light fa-brands fa-${redsocial2} ${rrssCircle}`} type="submit"></button>
      <button className={`btn btn-light fa-brands fa-${redsocial3} ${rrssCircle}`} type="submit"></button>
    </div>
  );
};

export default SocialButton;


