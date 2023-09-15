import s from './Content.module.css';

const Content = ({ dark }) => {
  return (
    <>
      <section className={dark ? `${s.section} ${s.dark}` : s.section}>
        <div className={s.content}>
          <img className={s.img} src="/card_1.png" alt="card_1_img" />
          <div className={s.container}>
            <h2 className={s.title}>GTX GEFORCE 1080</h2>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nihil debitis quod. Quia illum quidem exercitationem dolorem saepe
              ipsum corrupti culpa rem perspiciatis cupiditate odio, tempore
              necessitatibus similique perferendis dolorum.
            </p>
            <h4 className={s.price}>1000 $</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
