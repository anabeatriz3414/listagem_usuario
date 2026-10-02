function SucessMessage ({ mensagem }) {
    return (
        <p className="success-snackbar" aria-live="polite" role="status">
            {mensagem}
        </p>
    );
}

export default SucessMessage;