<script setup lang="ts">
import { ref } from 'vue';

// middle part
interface Contact {
  title: string;
  firstField: string;
  secondField: string;
  hasMsgLink: boolean;
  linkMsgUrl?: string;
}

const contacts: Contact[] = ref([
  {
    title: 'For all questions',
    firstField: '+7 920 278-00-68',
    secondField: 'qtim@agency.com',
    hasMsgLink: true,
    linkMsgUrl: '',
  },
  {
    title: 'Office in Russia',
    firstField: '139 Ruben Station Lake',
    secondField: 'Drew, NM 52678',
    hasMsgLink: true,
    linkMsgUrl: '',
  },
  {
    title: 'Office in Dubai',
    firstField: '139 Ruben Station Lake',
    secondField: 'Drew, NM 52678',
    hasMsgLink: false,
  }
]);

const defineContactType = (sourceLink: string): string => {
  if (sourceLink.includes('+7')) {
    return 'tel';
  } else if (sourceLink.includes('@')) {
    return 'mailto';
  } else {
    return 'string';
  }
};
const makeHrefToLink = (contactData: string): string => {
  const linkType = defineContactType(contactData);
  let result = `${linkType}:`;

  if (linkType === 'tel') {
    result += "+" + contactData.replace(/\D/g, '').replace(/^8/, '7');
  } else {
    result += contactData;
  }

  return result;
};

// low part
interface LowLink {
  title: string;
  href: string;
}

const leftLinks: LowLink[] = ref([
  {
    title: 'Facebook',
    href: '',
  },
  {
    title: 'Instagram',
    href: '',
  },
  {
    title: 'Telegram',
    href: '',
  },
]);

const centerLink: LowLink = ref({
  title: 'Go',
  href: '',
});

const rightLinks: LowLink[] = ref([
  {
    title: 'Behance',
    href: '',
  },
  {
    title: 'Linkedn',
    href: '',
  },
  {
    title: 'Privacy Policy',
    href: '',
  },
]);

</script>

<template>
  <footer class="footer">
    <p class="footer__high-part">Is there a project?</p>
    <div class="footer__middle-part">
      <p class="footer__strong-message">Let’s work together</p>
      <div class="footer__contacts">
        <div
            v-for="(contact, index) in contacts"
            :key="index"
            class="footer__one-contact footer-contact">
          <h5 class="footer-contact__title">{{ contact.title }}</h5>
          <template v-if="defineContactType(contact.firstField) !== 'string'">
            <a class="footer-contact__contact" :href="makeHrefToLink(contact.firstField)">{{ contact.firstField }}</a>
          </template>
          <template v-if="defineContactType(contact.firstField) === 'string'">
            <p class="footer-contact__contact">{{ contact.firstField }}</p>
          </template>
          <template v-if="defineContactType(contact.secondField) !== 'string'">
            <a class="footer-contact__contact" :href="makeHrefToLink(contact.secondField)">{{ contact.secondField }}</a>
          </template>
          <template v-if="defineContactType(contact.secondField) === 'string'">
            <p class="footer-contact__contact">{{ contact.secondField }}</p>
          </template>
          <template v-if="contact.hasMsgLink">
            <a class="footer-contact__msg-link" :href="contact.linkMsgUrl">
              <!-- svg -->
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="16" fill="#101010"/>
                <path d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </template>
        </div>
      </div>
    </div>
    <div class="footer__low-part">
      <div class="footer__low-links footer__low-links_left">
        <a
            v-for="(link, index) in leftLinks"
            :key="index"
            :href="link.href"
            class="footer__low-link">
          {{ link.title }}
        </a>
      </div>
      <a :href="centerLink.href" class="footer__low-center-link">{{ centerLink.title }}</a>
      <div class="footer__low-links footer__low-links_right">
        <a
            v-for="(link, index) in rightLinks"
            :key="index"
            :href="link.href"
            class="footer__low-link">
          {{ link.title }}
        </a>
      </div>
    </div>
    <div class="footer__black-background-circle-wrapper">
      <div class="footer__black-background-circle"></div>
    </div>
  </footer>
</template>

<style lang="scss">
@use '../assets/scss/mixins' as *;

.footer {
  background-color: #E2BEFF;
  padding: 140px 112px 0;
  position: relative;
  overflow: hidden;
  @media (min-width: 1600px) {
    padding: 140px 160px 0;
  }
  &__high-part {
    color: #101010;
    font-family: "TT Commons";
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.01em;
    margin-bottom: 56px;
    position: relative;
    z-index: 2;
  }
  &__middle-part {
    @include flex(row, space-between, flex-start);
    margin-bottom: 270px;
    position: relative;
    z-index: 2;
  }
  &__strong-message {
    color: #101010;
    font-family: "TT Commons";
    font-size: 90px;
    font-weight: 400;
    line-height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    width: 470px;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 10px;
    text-decoration-color: #101010;
  }
  &__contacts {
    flex-grow: 0;
    flex-shrink: 0;
    width: 325px;
  }
  &__one-contact {
    &:not(:last-child) {
      margin-bottom: 36px;
    }
  }
  &__low-part {
    @include flex(row, space-between, flex-end);
    padding-bottom: 25px;
    position: relative;
    z-index: 2;
  }
  &__low-links {
    @include flex(row, flex-start, center);
    flex-grow: 1;
    flex-shrink: 0;
    gap: 32px;
  }
  &__low-links_left {

  }
  &__low-links_right {
    justify-content: flex-end;
  }
  &__low-link {
    display: block;
    color: #101010;
    font-family: "TT Commons";
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.01em;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 6px;
    text-decoration-color: #101010;
  }
  &__low-center-link {
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0 8px;
    color: #F3F3F3;
    font-family: "TT Commons";
    font-size: 32px;
    font-weight: 400;
    line-height: 100%;
  }
  &__black-background-circle-wrapper {
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: -120px;
    left: 0;
    @include flex(row, center, center);
    @media (min-width: 1440px) {
      bottom: -180px;
    }
  }
  &__black-background-circle {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background-color: #101010;
    @media (min-width: 1440px) {
      width: 360px;
      height: 360px;
    }
  }
}


.footer-contact {
  width: 100%;
  @include flex(column, flex-start, flex-start);
  &__title {
    color: #101010;
    font-family: "TT Commons";
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 12px;
  }
  &__contact {
    display: block;
    color: #101010;
    font-family: "TT Commons";
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.01em;
  }
  &__msg-link {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding-top: 8px;
  }
}

</style>