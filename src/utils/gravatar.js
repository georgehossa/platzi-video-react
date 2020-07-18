import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const fromattedEmail = (email).trim().toLowerCase();
  const hash = md5(fromattedEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};

export default gravatar;
