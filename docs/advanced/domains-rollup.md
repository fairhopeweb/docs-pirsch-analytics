# Additional Domains and Rollup Views

Additional domains are required if you want to send statistics to multiple dashboards or create rollup views.

## Additional Domains

A Pirsch dashboard will only accept traffic for its configured domain and identification code. If the origin is different, you can add an additional domain to accept requests.

Below are the two use cases covered. It's also possible to combine the two and create rollup views while sending the statistics to multiple dashboards.

::: info
Duplicated page views and events count towards your monthly limit.
:::

### Creating a Rollup View

Let's say you have your top-level domain **example.com** and a subdomain **sub.example.com** and you want to track both websites on a single dashboard. In this case, create a dashboard for **example.com** and add an additional domain **sub.example.com** (wildcards with asterisks * also work). Now you can add the JS snippet to both sites using the same identification code.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="example-com-identification-code-here"></script>
```

### Sending Statistics to Multiple Dashboards

The second use case for additional domains is to send statistics to multiple dashboards. This allows you to create rollup views for two websites, each with its own dashboard. Each dashboard to which you send traffic requires an additional domain. For example, if you make an additional request from **example.com** to **rollup.example.com**, you need to add *example.com** to your **rollup.example.com** dashboard.

Once you configured the additional domain, you can send statistics from **example.com** to **rollup.example.com** as follows.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="example-com-identification-code-here"
    data-domain="rollup.example.com"></script>
```

To send statistics to more than one additional dashboard, you can comma-separate the list, such as `data-domain="rollup.example.com,my-website.com"`.

## Using the Server-Side Integration

Rollup views and additional domains can also be used through the server-side integration. You'll need a [client](/api-sdks/api#creating-a-client) to make the same requests as above from your server.
