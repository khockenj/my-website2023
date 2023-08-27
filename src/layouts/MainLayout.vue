<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="q-pa-md">
        <div class="row">
          <div class="col">
            <q-btn
              square
              flat
              stack
              no-caps
              class="home-icon"
              @click="openWindow(this, 'about')"
            >
              <q-avatar icon="mdi-robot" text-color="deep-purple"> </q-avatar>
              <div class="white">About Me</div>
            </q-btn>
            <q-btn
              square
              flat
              stack
              no-caps
              class="home-icon"
              @click="openWindow(this, 'projects')"
            >
              <q-avatar icon="mdi-cards" text-color="teal"> </q-avatar>
              <div class="white">Projects</div>
            </q-btn>
            <q-btn
              square
              flat
              stack
              no-caps
              class="home-icon"
              href="https://docs.google.com/document/d/1Wxca0DxutLRAWSDXOPhp7D2B1HytLYEv/edit?usp=sharing&ouid=105661401220528503426&rtpof=true&sd=true"
              target="_blank"
            >
              <q-avatar icon="mdi-file-document" text-color="brown"> </q-avatar>
              <div class="white">Resume</div>
            </q-btn>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <q-btn
              square
              flat
              stack
              no-caps
              class="home-icon"
              @click="openWindow(this, 'exp')"
            >
              <q-avatar icon="work" text-color="primary"> </q-avatar>
              <div class="white">Experience</div>
            </q-btn>
            <q-btn
              square
              flat
              stack
              no-caps
              class="home-icon"
              @click="openWindow(this, 'edu')"
            >
              <q-avatar icon="mdi-school" text-color="black"> </q-avatar>
              <div class="white">Education</div>
            </q-btn>
            <q-btn
              square
              flat
              stack
              no-caps
              class="home-icon"
              @click="openWindow(this, 'skills')"
            >
              <q-avatar icon="mdi-brain" text-color="red"> </q-avatar>
              <div class="white">Skills</div>
            </q-btn>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <q-btn
              square
              flat
              stack
              no-caps
              class="home-icon"
              href="https://fq2021.netlify.app/"
              target="_blank"
            >
              <q-avatar icon="mdi-leaf" text-color="green"> </q-avatar>
              <div class="white">LoL FlyQuest</div>
            </q-btn>
          </div>
        </div>

        <div style="max-width: 60rem">
          <ProjectWindow
            :title="windows[w].title"
            :type="w"
            v-for="w in opened"
            v-bind:key="w"
            :id="w"
            :active="active"
            @closed-me="closeWindow"
            @set-active="setActive"
            :count="count"
          />
        </div>
      </div>
      <!--<router-view />-->
    </q-page-container>

    <q-footer class="footer" elevated>
      <q-toolbar>
        <q-btn
          square
          outline
          icon="mdi-microsoft-windows-classic"
          aria-label="Start"
          label="Start"
          no-caps
          class="q-mr-sm ms-text black"
        >
          <q-menu
            anchor="top left"
            self="bottom left"
            class="bg-accent"
            style="width: 15rem"
          >
            <q-item clickable v-if="$q.platform.is.desktop">
              <q-item-section avatar>
                <q-icon color="teal" name="mdi-cards" />
              </q-item-section>

              <q-item-section>Projects</q-item-section>
              <q-item-section side>
                <q-icon color="black" name="arrow_right" />
              </q-item-section>
              <q-menu anchor="top end" self="top start" class="bg-accent">
                <q-list>
                  <q-item
                    clickable
                    dense
                    href="https://fq2021.netlify.app/"
                    target="_blank"
                  >
                    <q-item-section avatar>
                      <q-icon color="green" name="mdi-leaf" />
                    </q-item-section>
                    <q-item-section>LoL Flyquest Data Analytics</q-item-section>
                  </q-item>
                </q-list>
                <q-item clickable disable dense>
                  <q-item-section avatar>
                    <q-icon color="black" name="mdi-record-circle" />
                  </q-item-section>
                  <q-item-section>Web Vinyl</q-item-section>
                </q-item>
                <q-item clickable disable dense>
                  <q-item-section avatar>
                    <q-icon color="black" name="mdi-steam" />
                  </q-item-section>
                  <q-item-section>CS Tradeup Calculator</q-item-section>
                </q-item>
              </q-menu>
            </q-item>
            <q-item clickable v-if="$q.platform.is.desktop">
              <q-item-section avatar>
                <q-icon color="red" name="mdi-brain" />
              </q-item-section>

              <q-item-section>Skills</q-item-section>
              <q-item-section side>
                <q-icon color="black" name="arrow_right" />
              </q-item-section>
              <q-menu anchor="top end" self="top start" class="bg-accent">
                <q-list>
                  <q-item clickable dense>
                    <q-item-section avatar>
                      <q-icon color="deep-purple" name="mdi-code-tags" />
                    </q-item-section>
                    <q-item-section>Programming</q-item-section>
                    <q-item-section side>
                      <q-icon color="black" name="arrow_right" />
                    </q-item-section>
                    <q-menu anchor="top end" self="top start" class="bg-accent">
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon
                            color="yellow-10"
                            name="mdi-language-javascript"
                          />
                        </q-item-section>
                        <q-item-section>Javascript</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon color="cyan-7" name="mdi-language-python" />
                        </q-item-section>
                        <q-item-section>Python</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon color="pink" name="mdi-database" />
                        </q-item-section>
                        <q-item-section>SQL</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon color="green" name="mdi-database-off" />
                        </q-item-section>
                        <q-item-section>NoSQL</q-item-section>
                      </q-item>
                    </q-menu>
                  </q-item>
                </q-list>
                <q-item clickable dense>
                  <q-item-section avatar>
                    <q-icon color="red" name="mdi-library-shelves" />
                  </q-item-section>
                  <q-item-section>Frameworks & Libraries</q-item-section>
                  <q-item-section side>
                    <q-icon color="black" name="arrow_right" />
                  </q-item-section>
                  <q-menu anchor="top end" self="top start" class="bg-accent">
                    <q-list>
                      <q-item clickable dense>
                        <q-item-section avatar>
                          <q-icon
                            color="yellow-10"
                            name="mdi-language-javascript"
                          />
                        </q-item-section>
                        <q-item-section>Javascript</q-item-section>
                        <q-item-section side>
                          <q-icon color="black" name="arrow_right" />
                        </q-item-section>
                        <q-menu
                          anchor="top end"
                          self="top start"
                          class="bg-accent"
                        >
                          <q-list>
                            <q-item dense>
                              <q-item-section avatar>
                                <q-icon color="green-8" name="mdi-vuejs" />
                              </q-item-section>
                              <q-item-section>Vue</q-item-section>
                            </q-item>
                            <q-item dense>
                              <q-item-section avatar>
                                <q-icon color="red" name="mdi-angular" />
                              </q-item-section>
                              <q-item-section>Angular</q-item-section>
                            </q-item>
                            <q-item dense>
                              <q-item-section avatar>
                                <q-icon color="light-green" name="mdi-nodejs" />
                              </q-item-section>
                              <q-item-section>Node</q-item-section>
                            </q-item>
                            <q-item dense>
                              <q-item-section avatar>
                                <q-icon color="deep-orange" name="mdi-train" />
                              </q-item-section>
                              <q-item-section>Express</q-item-section>
                            </q-item>
                            <q-item dense>
                              <q-item-section avatar>
                                <q-icon
                                  color="light-blue-8"
                                  name="mdi-language-typescript"
                                />
                              </q-item-section>
                              <q-item-section>Typescript</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-item>
                      <q-item clickable dense>
                        <q-item-section avatar>
                          <q-icon color="cyan-7" name="mdi-language-python" />
                        </q-item-section>
                        <q-item-section>Python</q-item-section>
                        <q-item-section side>
                          <q-icon color="black" name="arrow_right" />
                        </q-item-section>
                        <q-menu
                          anchor="top end"
                          self="top start"
                          class="bg-accent"
                        >
                          <q-list>
                            <q-item dense>
                              <q-item-section avatar>
                                <q-icon color="pink-5" name="mdi-flask" />
                              </q-item-section>
                              <q-item-section>Flask</q-item-section>
                            </q-item>
                            <q-item dense>
                              <q-item-section avatar>
                                <q-icon color="black" name="mdi-panda" />
                              </q-item-section>
                              <q-item-section>pandas</q-item-section>
                            </q-item>
                            <q-item dense>
                              <q-item-section avatar>
                                <q-icon color="brown" name="mdi-numeric" />
                              </q-item-section>
                              <q-item-section>NumPy</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-item>
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon color="pink" name="mdi-database" />
                        </q-item-section>
                        <q-item-section>MySQL</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon color="green" name="mdi-database-off" />
                        </q-item-section>
                        <q-item-section>MongoDB</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
                <q-item clickable dense>
                  <q-item-section avatar>
                    <q-icon color="indigo" name="computer" />
                  </q-item-section>
                  <q-item-section>Software & Skills</q-item-section>
                  <q-item-section side>
                    <q-icon color="black" name="arrow_right" />
                  </q-item-section>
                  <q-menu anchor="top end" self="top start" class="bg-accent">
                    <q-list>
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon color="cyan-8" name="mdi-salesforce" />
                        </q-item-section>
                        <q-item-section>Salesforce</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon color="blue-10" name="mdi-atlassian" />
                        </q-item-section>
                        <q-item-section>Confluence & Jira</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section avatar>
                          <q-icon
                            color="red"
                            name="mdi-microsoft-windows-classic"
                          />
                        </q-item-section>
                        <q-item-section>Microsoft Office</q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        dense
                        href="https://www.youtube.com/watch?v=ODClWzLrkNE"
                        target="_blank"
                      >
                        <q-item-section avatar>
                          <q-icon color="deep-purple" name="mdi-alpha-a-box" />
                        </q-item-section>
                        <q-item-section>Agile - Harada Method</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-menu>
            </q-item>
            <q-item clickable @click="openWindow(this, 'about')">
              <q-item-section avatar>
                <q-icon color="deep-purple" name="mdi-robot" />
              </q-item-section>

              <q-item-section>About Me</q-item-section>
            </q-item>
            <q-item clickable @click="openWindow(this, 'exp')">
              <q-item-section avatar>
                <q-icon color="primary" name="work" />
              </q-item-section>

              <q-item-section>Experience</q-item-section>
            </q-item>
            <q-item clickable @click="openWindow(this, 'edu')">
              <q-item-section avatar>
                <q-icon color="black" name="mdi-school" />
              </q-item-section>

              <q-item-section>Education</q-item-section>
            </q-item>
            <q-item
              clickable
              href="https://docs.google.com/document/d/1Wxca0DxutLRAWSDXOPhp7D2B1HytLYEv/edit?usp=sharing&ouid=105661401220528503426&rtpof=true&sd=true"
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon color="brown" name="mdi-file-document" />
              </q-item-section>

              <q-item-section>Resume</q-item-section>
            </q-item>
          </q-menu>
        </q-btn>
        <q-separator color="seperator" vertical />
        <div class="q-mx-md outset-border">
          <!--<q-btn
            square
            dense
            icon="mdi-microsoft-internet-explorer"
            aria-label="LinkedIn"
            class="q-mx-auto ms-text linkedin"
            href=""
            target="_blank"
          />
          -->
          <q-btn
            square
            dense
            icon="mdi-email-newsletter"
            aria-label="Email"
            class="q-mr-auto ms-text ie"
            @click="copyEmail()"
            v-if="$q.platform.is.desktop"
          >
            <q-popup-proxy>
              <q-banner class="bg-accent">
                <template v-slot:avatar>
                  <q-icon name="mdi-email-multiple" color="primary" />
                </template>
                Email copied to clipboard
              </q-banner>
            </q-popup-proxy>
          </q-btn>
          <q-btn
            square
            dense
            text-color="purple"
            icon="bi-question-circle"
            aria-label="About this site"
            class="q-mx-auto ms-text"
            @click="openWindow(this, 'intro')"
          />
        </div>

        <q-btn
          square
          icon="mdi-robot"
          aria-label="About Me"
          label="About Me"
          no-caps
          text-color="deep-purple"
          class="q-mr-sm ms-text black"
          :class="{
            'inset-border': active == 'about',
            'outset-border': active != 'about',
          }"
          @click="openWindow(this, 'about')"
          v-if="$q.platform.is.desktop"
        />
        <q-btn
          square
          icon="mdi-cards"
          aria-label="Projects"
          label="Projects"
          no-caps
          text-color="teal"
          class="q-mr-sm ms-text black"
          :class="{
            'inset-border': active == 'projects',
            'outset-border': active != 'projects',
          }"
          @click="openWindow(this, 'projects')"
          v-if="$q.platform.is.desktop"
        />
        <q-btn
          square
          icon="mdi-brain"
          aria-label="Skills"
          label="Skills"
          no-caps
          text-color="red"
          class="q-mr-sm ms-text black"
          :class="{
            'inset-border': active == 'skills',
            'outset-border': active != 'skills',
          }"
          @click="openWindow(this, 'skills')"
          v-if="$q.platform.is.desktop"
        />
        <q-btn
          square
          icon="mdi-briefcase"
          aria-label="Experience"
          label="Experience"
          no-caps
          text-color="primary"
          class="q-mr-sm ms-text black"
          :class="{
            'inset-border': active == 'exp',
            'outset-border': active != 'exp',
          }"
          @click="openWindow(this, 'exp')"
          v-if="$q.platform.is.desktop"
        />
        <q-btn
          square
          icon="mdi-school"
          aria-label="Education"
          label="Education"
          no-caps
          class="q-mr-sm ms-text black"
          :class="{
            'inset-border': active == 'edu',
            'outset-border': active != 'edu',
          }"
          @click="openWindow(this, 'edu')"
          v-if="$q.platform.is.desktop"
        />

        <q-toolbar-title> </q-toolbar-title>
        <div class="q-pa-auto outset-border">
          <q-btn
            square
            dense
            icon="mdi-github"
            aria-label="Github"
            href="https://github.com/khockenj"
            target="_blank"
            class="q-mx-auto ms-text github"
          />
          <q-btn
            square
            dense
            icon="mdi-linkedin"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/kevin-hockenjos-264371107/"
            target="_blank"
            class="q-mx-auto ms-text linkedin"
          />
          <q-btn
            square
            aria-label="Clock"
            :label="clock"
            class="q-mx-auto ms-text black"
            disable
          />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectWindow from "components/ProjectWindow.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    ProjectWindow,
  },
  methods: {
    waitForElementToExist: function (selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.body, {
          subtree: true,
          childList: true,
        });
      });
    },
    updateClock: function () {
      let td = new Date();
      this.clock = td.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setInterval(() => {
        td = new Date();
        this.clock = td.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      }, 5000);
    },
    copyEmail: (self, t, b) => {
      navigator.clipboard.writeText("khockenj@gmail.com").then(
        () => {
          /* clipboard successfully set */
        },
        () => {
          /* clipboard write failed */
        }
      );
    },
    openWindow: (self, flag) => {
      self.opened.indexOf(flag) === -1
        ? self.opened.push(flag)
        : console.log("This item already exists");
      self.active = flag;
      let el = self.waitForElementToExist("#" + flag);
      el.then(() => {
        self.setActive(flag);
      });
    },
    closeWindow(page) {
      this.opened = this.opened.filter((item) => item !== page);
      if (page == this.active) {
        this.active = this.opened[this.opened.length - 1];
      }
    },
    setActive(page) {
      this.active = page;
      let el = document.getElementById(page);
      el.firstChild.style.zIndex = this.count;
      this.count++;
    },
  },
  created() {
    this.updateClock();
  },
  data() {
    return {
      clock: "",
      count: 0,
      opened: ["intro"],
      active: "intro",
      windows: {
        about: {
          title: "About Me",
        },
        exp: {
          title: "My Experience",
        },
        projects: {
          title: "My Projects",
        },
        intro: {
          title: "Welcome!",
        },
        edu: {
          title: "My Education",
        },
        skills: {
          title: "My Skills",
        },
      },
    };
  },
});
</script>
