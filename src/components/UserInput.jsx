export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          INITIAL INVESTMENT <input type="text" />
        </label>
        <label>
          ANNUAL INVESTMENT
          <input type="text" />
        </label>
      </div>
      <div className="input-group">
        <label>
          EXPECTED RETURN
          <input type="text" />
        </label>
        <label>
          DURATION
          <input type="text" />
        </label>
      </div>
    </div>
  );
}
