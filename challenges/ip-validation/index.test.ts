import { describe, test, expect } from 'bun:test';
import { isIPv4, isIPv6 } from '.';

describe("isIPv4", () => {
    describe("Is IPv4", () => {

        const ips = [
            "0.0.0.0",
            "11.11.11.11",
            "222.222.222.222",
            "255.255.255.255",
            "0.97.106.200",
            "255.4.195.40"
        ];

        ips.forEach((ip) => {
            test(`IP is valid: ${ip}`, () => {
                expect(isIPv4(ip)).toBe(true);
            });
        });
    });

    describe("Is not IPv4", () => {

        const ips = [
            "576.AE.12.7",
            "11.11.11",
            "222.222.222.222.222",
            "255.255.255.255.255.255.255.255",
            "0.97.1066.1",
            "256.4.195.40",
            "2001:db8:3333:4444:5555:6666:7777:8888",
            "hello I'm an IP",
            "....",
            "a.b.c.d",
            "",
            " "
        ];

        ips.forEach((ip) => {
            test(`IP is not valid: ${ip}`, () => {
                expect(isIPv4(ip)).toBe(false);
            });
        });
    });
});

describe("isIPv6", () => {
    describe("Is IPv6", () => {

        const ips = [
            "2001:db8:3333:4444:5555:6666:7777:8888",
            "2001:db8:3333:4444:cccc:DDDD:EEEE:FFFF",
            "0:0:0:0:0:0:0:0",
            "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF",
            "2001:db8:0:0:0:0:0:0",
            "2001:0db8:0001:0000:0000:0ab9:C0A8:0102",
            "2345:0425:2CA1:0000:0000:0567:5673:23b5",
        ];

        ips.forEach((ip) => {
            test(`IP is valid: ${ip}`, () => {
                expect(isIPv6(ip)).toBe(true);
            });
        });
    });

    describe("Is not IPv6", () => {

        const ips = [
            "2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFFF",
            "0:hello:3333:4444:CCCC:DDDD:EEEE:FFFF",
            "0:hello:3333:4444:CCCC:DDDD:EEEE",
            "576.AE.12.7",
            "255.255.255.255.255.255.255.255",
            "hello I'm an IP",
            ":::::",
            ":",
            "....",
            "a.b.c.d",
            "",
            " "
        ];

        ips.forEach((ip) => {
            test(`IP is not valid: ${ip}`, () => {
                expect(isIPv6(ip)).toBe(false);
            });
        });
    });
});