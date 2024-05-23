import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CVDownload = () => {
  return (
    <div className="cv-download">
        <img src="../images/text-wrap.png" alt="Rotating" className="rotating-image" />
        <a href="../images/cameronjenkins.pdf" download="CameronJenkinsCV">
            <FontAwesomeIcon icon={faDownload} size="1x" />
        </a>
    </div>
  );
};

export default CVDownload;