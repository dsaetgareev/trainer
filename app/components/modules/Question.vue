<template>
    <StackLayout>
        <StackLayout class="alert">
            <Label v-if="minus" :text='msgMinus()'/>
            <Label v-else :text='msgPlus()'/>
            <StackLayout
                    class="buttons"
                    v-for="number in answers">
                <Button
                        :text="number"
                        class="btns"
                        @tap="onAnswer(number)"
                />
            </StackLayout >
        </StackLayout>
    </StackLayout>
</template>

<script>
    export default {
        props: ['settings', 'level'],
        data() {
            return {
                x: mtRand(this.settings.from, this.settings.to),
                y: mtRand(this.settings.from, this.settings.to),
            }
        },

        computed: {
            checkPositive() {
                return this.x > this.y;
            },
            minus() {
                return Math.random() > 0.5 && this.checkPositive;
            },
            good() {
                return this.minus ? this.x - this.y : this.x + this.y;
            },
            answers() {
                let res = [this.good];
                while (res.length < this.settings.variants) {
                    let num = mtRand(this.good - this.settings.range, this.good + this.settings.range);
                    if (res.indexOf(num) === -1 && num > 0) {
                        res.push(num);
                    }
                }
                return res.sort(function () {
                    return Math.random() - 0.5;
                });
            }
        },

        methods: {
            msgMinus() {
                return `${this.x} - ${this.y} = ?`;
            },
            msgPlus() {
                return `${this.x} + ${this.y} = ?`;
            },
            onAnswer(num) {
                if (this.good === num) {
                    this.$emit('success');
                } else {
                    this.$emit('error', `Нет, Камиллочка! \t Ответ: ${this.x} + ${this.y} = ${this.good}!`)
                }
            }
        }

    };

    function mtRand(min, max) {
        let diff = max - min;
        return Math.floor(Math.random() * (diff + 1)) + min;
    }
</script>

<style>
    .alert {
        text-align: center;
        padding-top: 20px;
        background-color: #eee;
    }

    Label {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .buttons {
        width: 100%;
        text-align: center;
    }

    .btns {
        width: 50%;
        background-color: #53ba82;
    }

    .level {
        text-align: left;
    }
</style>
