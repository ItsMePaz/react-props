function Link({ url, text }) {
  return (
    <a href={url} target="_blank">
      {text}
    </a>
  );
}

export default Link;
