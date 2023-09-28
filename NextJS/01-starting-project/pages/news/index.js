//domain/news

import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <div>
                <h1>News</h1>
                <ul>
                    <li><Link href="/some/link"> NextJS is great</Link></li>
                    <li>Some other stuff</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default NewsPage;