const formatter = (locale: string, options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat(locale, options);
};

export const useCurrencyHelper = (money) => {
  const locale = money.locale || 'en-AU';

  if (!money?.amount) {
    throw new Error(`Unable to get 'locale', which means that 'locale' was not passed. 'locale' is required`);
  }

  const amount = parseFloat(money.amount);

  const options = {
    style: 'currency',
    currency: money.currency,
  };

  const defaultFormatter = new Intl.NumberFormat('AUD', options);

  const nameFormatter = () =>
    formatter(locale, {
      ...options,
      currencyDisplay: 'name',
    });

  const narrowSymbolFormatter = () =>
    formatter(locale, {
      ...options,
      currencyDisplay: 'narrowSymbol',
    });

  const withoutTrailingZerosFormatter = () =>
    formatter(locale, {
      ...options,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const withoutCurrencyFormatter = () => formatter(locale);

  const withoutTrailingZerosOrCurrencyFormatter = () =>
    formatter(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const isPartCurrency = (part: Intl.NumberFormatPart): boolean => part.type === 'currency';

  return {
    original: () => money,
    currencyCode: () => money.currencyCode,
    localizedString: () => formatter(locale).format(amount),

    parts: () => formatter(locale).formatToParts(amount),

    withoutTrailingZeros: () =>
      amount % 1 === 0 ? withoutTrailingZerosFormatter().format(amount) : formatter(locale).format(amount),

    withoutTrailingZerosAndCurrency: () =>
      amount % 1 === 0
        ? withoutTrailingZerosOrCurrencyFormatter().format(amount)
        : withoutCurrencyFormatter().format(amount),

    currencyName: () => nameFormatter().formatToParts(amount).find(isPartCurrency)?.value ?? money.currencyCode, // e.g. "US dollars"

    currencySymbol: () => formatter(locale).formatToParts(amount).find(isPartCurrency)?.value ?? money.currencyCode, // e.g. "USD"

    currencyNarrowSymbol: () => narrowSymbolFormatter().formatToParts(amount).find(isPartCurrency)?.value ?? '', // e.g. "$"

    amount: () =>
      formatter(locale)
        .formatToParts(amount)
        .filter((part) => ['decimal', 'fraction', 'group', 'integer', 'literal'].includes(part.type))
        .map((part) => part.value)
        .join(''),
  };
};
