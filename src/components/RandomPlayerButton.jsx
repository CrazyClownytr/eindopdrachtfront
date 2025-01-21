function RandomPlayerButton({ onButtonClick }) {
    return (
        <button onClick={onButtonClick}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
        >
            Voeg Willekeurige Speler Toe
        </button>
    );
}

export default RandomPlayerButton;
