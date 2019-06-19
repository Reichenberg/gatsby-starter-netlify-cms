import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

export default function PrintStore() {
  return (
    <Layout renderBg={true}>
      <Helmet>
        <script
          type="text/javascript"
          src="https://www.etsy.com/assets/js/etsy_mini_shop.js"
        />
        <script type="text/javascript">
          new Etsy.Mini(20469737,'gallery',3,3,0,'https://www.etsy.com');
        </script>
      </Helmet>
    </Layout>
  );
}
