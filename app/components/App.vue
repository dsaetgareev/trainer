<template>
    <Page>
        <ActionBar>
            <StackLayout>
                <Label
                        text="Арифметический тренажер для Камиллы!"
                        textWrap="true"
                        class="label"
                />
            </StackLayout>
        </ActionBar>
        <GridLayout columns="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
            <app-start-screen
                    v-if="state == 'start'"
                    @onStart='onStart'
            ></app-start-screen>
            <app-question
                    v-else-if="state == 'question'"
                    :settings="settings"
                    :level="level"
                    @success="onQuestSuccess"
                    @error="onQuestError"
            ></app-question>
            <app-message
                    v-else-if="state == 'message'"
                    :type="message.type"
                    :text="message.text"
                    @onNext="onNext"
            ></app-message>
            <app-result-screen
                    v-else-if="state == 'result'"
                    :stats="this.stats"
                    @repeat="onStart"
                    @nextLevel="onNextLevel"
                    @video="playVideo"
            ></app-result-screen>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                state: 'start',
                stats: {
                    success: 0,
                    error: 0
                },
                settings:
                    {
                        from: 2,
                        to: 10,
                        range: Math.floor(Math.random() * 10),
                        variants: 3,
                    },
                level: 0,
                message: {
                    type: '',
                    text: ''
                },
                questMax: 3,
            }
        },
        computed: {
            questDone() {
                return this.stats.success + this.stats.error;
            },
            progressStyles() {
                return this.questDone / this.questMax * 100;
            }
        },
        methods: {
            onStart() {
                this.state = 'question';
                this.stats.success = 0;
                this.stats.error = 0;
            },
            onQuestSuccess() {
                this.state = 'message';
                this.message.text = 'Отлично, Камилла! Все верно! Ты молодец!!! Продолжай в том же духе!';
                this.message.type = 'success';
                this.stats.success++;
            },
            onQuestError(msg) {
                this.state = 'message';
                this.message.text = msg;
                this.message.type = 'error';
                this.stats.error++;
            },
            onNext() {
                if (this.questDone < this.questMax) {
                    this.state = 'question';
                } else {
                    this.state = 'result';
                }

            },
            onNextLevel() {
                this.level++;
                this.settings.from += 2;
                this.settings.to += 2;
                this.settings.range += 1;
                if (this.settings.variants < 5) {
                    this.settings.variants += 1;
                }
                this.onStart();
            },
        }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .label {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        padding: 10px 10px;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
