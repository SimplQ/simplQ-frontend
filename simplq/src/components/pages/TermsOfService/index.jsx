import React from 'react';
import ClickableLogo from 'components/common/ClickableLogo';
import styles from './termsOfService.module.scss';

function TermsOfService() {
  return (
    <>
      <div className={styles['header-bar']}>
        <ClickableLogo />
      </div>
      <div className={styles['content']}>
        <h2 id="privacy">Privacy Policy</h2>
        <p>
          Your privacy is important to us. It is SimplQ&apos;s policy to respect your privacy
          regarding any information we may collect from you across our website,&nbsp;
          <a href="http://simplq.me">http://simplq.me</a>
          <span>, and other sites we own and operate.</span>
        </p>
        <p>
          We only ask for personal information when we truly need it to provide a service to you. We
          collect it by fair and lawful means, with your knowledge and consent. We also let you know
          why we’re collecting it and how it will be used.
        </p>
        <p>
          We only retain collected information for as long as necessary to provide you with your
          requested service. What data we store, we’ll protect within commercially acceptable means
          to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </p>
        <p>
          We don’t share any personally identifying information publicly or with third-parties,
          except when required to by law.
        </p>
        <p>
          Our website may link to external sites that are not operated by us. Please be aware that
          we have no control over the content and practices of these sites, and cannot accept
          responsibility or liability for their respective privacy policies.
        </p>
        <p>
          You are free to refuse our request for your personal information, with the understanding
          that we may be unable to provide you with some of your desired services.
        </p>
        <p>
          Your continued use of our website will be regarded as acceptance of our practices around
          privacy and personal information. If you have any questions about how we handle user data
          and personal information, feel free to contact us.
        </p>
        <p>This policy is effective as of 17 October 2020.</p>
        <h2 id="terms-of-service">SimplQ Terms of Service</h2>
        <h3>1. Terms</h3>
        <p>
          By accessing the website at&nbsp;
          <a href="http://simplq.me">http://simplq.me</a>
          <span>
            , you are agreeing to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with any applicable local
            laws. If you do not agree with any of these terms, you are prohibited from using or
            accessing this site. The materials contained in this website are protected by applicable
            copyright and trademark law.
          </span>
        </p>
        <p>
          This license shall automatically terminate if you violate any of these restrictions and
          may be terminated by SimplQ at any time. Upon terminating your viewing of these materials
          or upon the termination of this license, you must destroy any downloaded materials in your
          possession whether in electronic or printed format.
        </p>

        <h3>2. Disclaimer</h3>
        <ol type="a">
          <li>
            The materials on SimplQ&apos;s website are provided on an &apos;as is&apos; basis.
            SimplQ makes no warranties, expressed or implied, and hereby disclaims and negates all
            other warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </li>
          <li>
            Further, SimplQ does not warrant or make any representations concerning the accuracy,
            likely results, or reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </li>
        </ol>
        <h3>3. Limitations</h3>
        <p>
          In no event shall SimplQ or its suppliers be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business interruption) arising
          out of the use or inability to use the materials on SimplQ&apos;s website, even if SimplQ
          or a SimplQ authorized representative has been notified orally or in writing of the
          possibility of such damage. Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or incidental damages, these
          limitations may not apply to you.
        </p>
        <h3>4. Accuracy of materials</h3>
        <p>
          The materials appearing on SimplQ&apos;s website could include technical, typographical,
          or photographic errors. SimplQ does not warrant that any of the materials on its website
          are accurate, complete or current. SimplQ may make changes to the materials contained on
          its website at any time without notice. However SimplQ does not make any commitment to
          update the materials.
        </p>
        <h3>5. Links</h3>
        <p>
          SimplQ has not reviewed all of the sites linked to its website and is not responsible for
          the contents of any such linked site. The inclusion of any link does not imply endorsement
          by SimplQ of the site. Use of any such linked website is at the user&apos;s own risk.
        </p>
        <h3>6. Modifications</h3>
        <p>
          SimplQ may revise these terms of service for its website at any time without notice. By
          using this website you are agreeing to be bound by the then current version of these terms
          of service.
        </p>
        <h3>7. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of
          India and you irrevocably submit to the exclusive jurisdiction of the courts in that State
          or location.
        </p>
      </div>
    </>
  );
}

export default TermsOfService;
