import styles from '@/styles/pages/work.module.css'
import { useRouter } from "next/router";

export default function WorkForm() {
  const router = useRouter();
  let workId;
  if (router.query.workId) {
    workId = router.query.workId[0];
  }

  return <>workId:{workId}</>;
}
