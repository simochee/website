import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet} from '@builder.io/qwik-city'
import './global.css'

export default component$(() => {
    return (
        <QwikCityProvider>
            <head>
                <meta charset="utf-8" />
            </head>
            <body>
                <RouterOutlet />
            </body>
        </QwikCityProvider>
    )
})