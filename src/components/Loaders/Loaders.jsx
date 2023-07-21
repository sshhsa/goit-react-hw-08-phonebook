import { Oval, ThreeDots } from 'react-loader-spinner';
import css from './Loaders.module.css';

export function Loader() {
  return (
    <div className={css.loaderBox}>
      <Oval
        height={80}
        width={80}
        color="#b81d24"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#f5f5f1"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export function LoaderButton() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#f5f5f1"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
