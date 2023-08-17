<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view :opened="opened" />
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
            <q-item clickable>
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
            <q-item clickable>
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
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="deep-purple" name="mdi-robot" />
              </q-item-section>

              <q-item-section>About Me</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="work" />
              </q-item-section>

              <q-item-section>Experience</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="black" name="mdi-school" />
              </q-item-section>

              <q-item-section>Education</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="brown" name="mdi-file-document" />
              </q-item-section>

              <q-item-section>Resume</q-item-section>
            </q-item>
          </q-menu>
        </q-btn>
        <q-separator color="seperator" vertical />
        <div class="q-mx-md outset-border">
          <q-btn
            square
            dense
            icon="mdi-microsoft-internet-explorer"
            aria-label="LinkedIn"
            class="q-mx-auto ms-text linkedin"
          />
          <q-btn
            square
            dense
            icon="mdi-email-newsletter"
            aria-label="Email"
            class="q-mr-auto ms-text ie"
            @click="copyEmail()"
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
          />
        </div>

        <q-btn
          square
          icon="mdi-robot"
          aria-label="About Me"
          label="About Me"
          no-caps
          text-color="deep-purple"
          class="q-mr-sm ms-text black inset-border"
          @click="open('about')"
        />
        <q-btn
          square
          icon="mdi-cards"
          aria-label="Projects"
          label="Projects"
          no-caps
          text-color="teal"
          class="q-mr-sm ms-text black outset-border"
          @click="open('projects')"
        />
        <q-btn
          square
          icon="mdi-brain"
          aria-label="Skills"
          label="Skills"
          no-caps
          text-color="red"
          class="q-mr-sm ms-text black outset-border"
          @click="open('skills')"
        />
        <q-btn
          square
          icon="mdi-briefcase"
          aria-label="Experience"
          label="Experience"
          no-caps
          text-color="primary"
          class="q-mr-sm ms-text outset-border"
          @click="open('exp')"
        />
        <q-btn
          square
          icon="mdi-school"
          aria-label="Education"
          label="Education"
          no-caps
          class="q-mr-sm ms-text black outset-border"
          @click="open('edu')"
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

export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {
      clock: "",
      opened: "",
    };
  },
  methods: {
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
    open: (flag) => {
      opened = flag;
    },
  },
  created() {
    this.updateClock();
  },
});
</script>
