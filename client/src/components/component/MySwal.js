import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const saError = ({ icon = "error", title = "Oops...:(", text }) => {
    MySwal.fire({
        icon,
        title,
        text,
    });
    return null;
};

const saSuccess = ({ icon = "success", title = "Success! :)", text, timer = 1500, showConfirmButton = false }) => {
    MySwal.fire({
        icon,
        title,
        text,
        timer,
        showConfirmButton,
    });
    return null;
};

export default { saError, saSuccess };
