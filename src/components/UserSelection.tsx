
type UserSelectionProps = {
  handleUserSelection: (user: number) => void,
  activeUserId: number,
}
export const UserSelection = ({handleUserSelection, activeUserId }: UserSelectionProps) => {
  const userClass = (userId: number) => userId === activeUserId ? 'active-user' : 'inactive-user'
  return (
    <div>
      <button className={userClass(1)} onClick={() => handleUserSelection(1)}>X</button>
      <button className={userClass(2)} onClick={() => handleUserSelection(2)}>O</button>
    </div>
)}
