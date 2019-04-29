// @flow
import Az from 'az';
import BezReceptaBot from './bot';

const bot = new BezReceptaBot();

Az.Morph.init(() => bot.run());

const TELEGRAM_TOKEN = '848538482:AAHlWt5bS1fT_79tOWZ9Og6lVeGKDICMOAw'