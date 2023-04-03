import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./ActiveLink.module.css";

type Props = {
  href?: string,
  text?: string
};

export const ActiveLink = ({ href, text }: Props) => {

  const { asPath } = useRouter();

  if (!href || !text) return null;

  return (
    <Link legacyBehavior href={href}>
      <a className={styles.nav_link} aria-current={asPath === href ? "page" : undefined}>
        {text}
      </a>
    </Link>
  );
};
