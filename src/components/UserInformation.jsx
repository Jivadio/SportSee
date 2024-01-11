import PropTypes from "prop-types";

UserInformation.propTypes = {
  firstname: PropTypes.string,
};

export default function UserInformation({ firstname }) {
  return (
    <>
      <div className="user-information">
        <h1 className="user-information-title">
          Bonjour{" "}
          <span className="user-information-firstname">{firstname}</span>
        </h1>
        <p className="user-information-subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    </>
  );
}
