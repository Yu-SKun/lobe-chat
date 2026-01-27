import { useTranslation } from 'react-i18next';

import SettingHeader from '@/app/[variants]/(main)/settings/features/SettingHeader';

import About from './features/About';
import Analytics from './features/Analytics';
import Divider from '@/components/Cell/Divider';
import { styles } from '@/components/FormAction';
import { BRANDING_NAME } from '@/const/branding';
import Form from '@/features/DevPanel/FeatureFlagViewer/Form';
import Version from './features/Version';

const Page = ({ mobile }: { mobile?: boolean }) => {
  const { t } = useTranslation('setting');
  return (
    <>
      <Form.Group
        style={{ width: '100%' }}
        title={`${t('about')} ${BRANDING_NAME}`}
        variant={'borderless'}
      >
        <Flexbox gap={20} paddingBlock={20} width={'100%'}>
          <div className={styles.title}>{t('version')}</div>
          <Version mobile={mobile} />
          <Divider style={{ marginBlock: 0 }} />
          {/* <div className={styles.title}>{t('contact')}</div>
          <AboutList
            ItemRender={ItemLink}
            items={[
              {
                href: OFFICIAL_SITE,
                label: t('officialSite'),
                value: 'officialSite',
              },
              {
                href: mailTo(EMAIL_SUPPORT),
                label: t('mail.support'),
                value: 'support',
              },
              {
                href: mailTo(EMAIL_BUSINESS),
                label: t('mail.business'),
                value: 'business',
              },
            ]}
          />
          <Divider style={{ marginBlock: 0 }} />
          <div className={styles.title}>{t('information')}</div>
          <AboutList
            ItemRender={ItemCard}
            grid
            items={[
              {
                href: BLOG,
                icon: SiRss,
                label: t('blog'),
                value: 'blog',
              },
              {
                href: GITHUB,
                icon: SiGithub,
                label: 'GitHub',
                value: 'feedback',
              },
              {
                href: DISCORD,
                icon: SiDiscord,
                label: 'Discord',
                value: 'discord',
              },
              {
                href: X,
                icon: SiX as any,
                label: 'X / Twitter',
                value: 'x',
              },

              {
                href: MEDIDUM,
                icon: SiMedium,
                label: 'Medium',
                value: 'medium',
              },
            ]}
          />
          <Divider style={{ marginBlock: 0 }} />
          <div className={styles.title}>{t('legal')}</div>
          <AboutList
            ItemRender={ItemLink}
            items={[
              {
                href: TERMS_URL,
                label: t('terms'),
                value: 'terms',
              },
              {
                href: PRIVACY_URL,
                label: t('privacy'),
                value: 'privacy',
              },
            ]}
          /> */}
        </Flexbox>
      </Form.Group>
      {enabledTelemetryChat && <Analytics />}
    </>
  );
};

export default Page;
