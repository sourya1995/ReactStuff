//domain/news
import { useRouter } from 'next/router';
function DetailPage(){
    const router = useRouter();
    const newsId = router.query.newsId;
    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}

export default DetailPage;