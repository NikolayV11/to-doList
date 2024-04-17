import { Link } from "react-router-dom";
import { typeListLinkMenu } from "../../types";

export const LinkBtn = ({
  title,
  className,
  link,
  imgUrl,
  classNameImg,
  alt,
  onClick,
}: typeListLinkMenu) => {
  return (
    <Link onClick={onClick} className={className} to={link}>
      {imgUrl && <img className={classNameImg && ""} src={imgUrl} alt={alt && ""} />}
      <p>{title}</p>
    </Link>
  );
};
