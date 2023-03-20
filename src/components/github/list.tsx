import { withLoading } from '../../hocs/loading/with-loading';

interface IProps {
  repos: Array<{}>;
}

const List = (props: IProps) => {
  const { repos } = props;
  if (!repos) return null;
  if (!repos.length) return <p>No Repos, Sorry</p>;
  return (
    <ul>
      {repos.map((r: any) => (
        <li key={r.id}>{r.full_name}</li>
      ))}
    </ul>
  );
};

export default List;

export const ListWithLoading = withLoading(List);
