(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Me=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(Me||{});function ee(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Bp(e){return ee(e).filter(t=>isNaN(Number(t)))}function _t(e){return Bp(e).map(n=>e[n])}var Lp=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ip=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Rp=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Do={Space_Separator:Lp,ID_Start:Ip,ID_Continue:Rp},ge={isSpaceSeparator(e){return typeof e=="string"&&Do.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Do.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Do.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let fa,xe,Ut,us,dn,bt,$e,Ja,qr;var Op=function(t,n){fa=String(t),xe="start",Ut=[],us=0,dn=1,bt=0,$e=void 0,Ja=void 0,qr=void 0;do $e=Vp(),Wp[xe]();while($e.type!=="eof");return typeof n=="function"?da({"":qr},"",n):qr};function da(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=String(i),o=da(r,s,n);o===void 0?delete r[s]:Object.defineProperty(r,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const s=da(r,i,n);s===void 0?delete r[i]:Object.defineProperty(r,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let G,q,Lr,Rt,Z;function Vp(){for(G="default",q="",Lr=!1,Rt=1;;){Z=zt();const e=qf[G]();if(e)return e}}function zt(){if(fa[us])return String.fromCodePoint(fa.codePointAt(us))}function A(){const e=zt();return e===`
`?(dn++,bt=0):e?bt+=e.length:bt++,e&&(us+=e.length),e}const qf={default(){switch(Z){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":A();return;case"/":A(),G="comment";return;case void 0:return A(),se("eof")}if(ge.isSpaceSeparator(Z)){A();return}return qf[xe]()},comment(){switch(Z){case"*":A(),G="multiLineComment";return;case"/":A(),G="singleLineComment";return}throw oe(A())},multiLineComment(){switch(Z){case"*":A(),G="multiLineCommentAsterisk";return;case void 0:throw oe(A())}A()},multiLineCommentAsterisk(){switch(Z){case"*":A();return;case"/":A(),G="default";return;case void 0:throw oe(A())}A(),G="multiLineComment"},singleLineComment(){switch(Z){case`
`:case"\r":case"\u2028":case"\u2029":A(),G="default";return;case void 0:return A(),se("eof")}A()},value(){switch(Z){case"{":case"[":return se("punctuator",A());case"n":return A(),vn("ull"),se("null",null);case"t":return A(),vn("rue"),se("boolean",!0);case"f":return A(),vn("alse"),se("boolean",!1);case"-":case"+":A()==="-"&&(Rt=-1),G="sign";return;case".":q=A(),G="decimalPointLeading";return;case"0":q=A(),G="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":q=A(),G="decimalInteger";return;case"I":return A(),vn("nfinity"),se("numeric",1/0);case"N":return A(),vn("aN"),se("numeric",NaN);case'"':case"'":Lr=A()==='"',q="",G="string";return}throw oe(A())},identifierNameStartEscape(){if(Z!=="u")throw oe(A());A();const e=ha();switch(e){case"$":case"_":break;default:if(!ge.isIdStartChar(e))throw zu();break}q+=e,G="identifierName"},identifierName(){switch(Z){case"$":case"_":case"‌":case"‍":q+=A();return;case"\\":A(),G="identifierNameEscape";return}if(ge.isIdContinueChar(Z)){q+=A();return}return se("identifier",q)},identifierNameEscape(){if(Z!=="u")throw oe(A());A();const e=ha();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!ge.isIdContinueChar(e))throw zu();break}q+=e,G="identifierName"},sign(){switch(Z){case".":q=A(),G="decimalPointLeading";return;case"0":q=A(),G="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":q=A(),G="decimalInteger";return;case"I":return A(),vn("nfinity"),se("numeric",Rt*(1/0));case"N":return A(),vn("aN"),se("numeric",NaN)}throw oe(A())},zero(){switch(Z){case".":q+=A(),G="decimalPoint";return;case"e":case"E":q+=A(),G="decimalExponent";return;case"x":case"X":q+=A(),G="hexadecimal";return}return se("numeric",Rt*0)},decimalInteger(){switch(Z){case".":q+=A(),G="decimalPoint";return;case"e":case"E":q+=A(),G="decimalExponent";return}if(ge.isDigit(Z)){q+=A();return}return se("numeric",Rt*Number(q))},decimalPointLeading(){if(ge.isDigit(Z)){q+=A(),G="decimalFraction";return}throw oe(A())},decimalPoint(){switch(Z){case"e":case"E":q+=A(),G="decimalExponent";return}if(ge.isDigit(Z)){q+=A(),G="decimalFraction";return}return se("numeric",Rt*Number(q))},decimalFraction(){switch(Z){case"e":case"E":q+=A(),G="decimalExponent";return}if(ge.isDigit(Z)){q+=A();return}return se("numeric",Rt*Number(q))},decimalExponent(){switch(Z){case"+":case"-":q+=A(),G="decimalExponentSign";return}if(ge.isDigit(Z)){q+=A(),G="decimalExponentInteger";return}throw oe(A())},decimalExponentSign(){if(ge.isDigit(Z)){q+=A(),G="decimalExponentInteger";return}throw oe(A())},decimalExponentInteger(){if(ge.isDigit(Z)){q+=A();return}return se("numeric",Rt*Number(q))},hexadecimal(){if(ge.isHexDigit(Z)){q+=A(),G="hexadecimalInteger";return}throw oe(A())},hexadecimalInteger(){if(ge.isHexDigit(Z)){q+=A();return}return se("numeric",Rt*Number(q))},string(){switch(Z){case"\\":A(),q+=_p();return;case'"':if(Lr)return A(),se("string",q);q+=A();return;case"'":if(!Lr)return A(),se("string",q);q+=A();return;case`
`:case"\r":throw oe(A());case"\u2028":case"\u2029":qp(Z);break;case void 0:throw oe(A())}q+=A()},start(){switch(Z){case"{":case"[":return se("punctuator",A())}G="value"},beforePropertyName(){switch(Z){case"$":case"_":q=A(),G="identifierName";return;case"\\":A(),G="identifierNameStartEscape";return;case"}":return se("punctuator",A());case'"':case"'":Lr=A()==='"',G="string";return}if(ge.isIdStartChar(Z)){q+=A(),G="identifierName";return}throw oe(A())},afterPropertyName(){if(Z===":")return se("punctuator",A());throw oe(A())},beforePropertyValue(){G="value"},afterPropertyValue(){switch(Z){case",":case"}":return se("punctuator",A())}throw oe(A())},beforeArrayValue(){if(Z==="]")return se("punctuator",A());G="value"},afterArrayValue(){switch(Z){case",":case"]":return se("punctuator",A())}throw oe(A())},end(){throw oe(A())}};function se(e,t){return{type:e,value:t,line:dn,column:bt}}function vn(e){for(const t of e){if(zt()!==t)throw oe(A());A()}}function _p(){switch(zt()){case"b":return A(),"\b";case"f":return A(),"\f";case"n":return A(),`
`;case"r":return A(),"\r";case"t":return A(),"	";case"v":return A(),"\v";case"0":if(A(),ge.isDigit(zt()))throw oe(A());return"\0";case"x":return A(),Up();case"u":return A(),ha();case`
`:case"\u2028":case"\u2029":return A(),"";case"\r":return A(),zt()===`
`&&A(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw oe(A());case void 0:throw oe(A())}return A()}function Up(){let e="",t=zt();if(!ge.isHexDigit(t)||(e+=A(),t=zt(),!ge.isHexDigit(t)))throw oe(A());return e+=A(),String.fromCodePoint(parseInt(e,16))}function ha(){let e="",t=4;for(;t-- >0;){const n=zt();if(!ge.isHexDigit(n))throw oe(A());e+=A()}return String.fromCodePoint(parseInt(e,16))}const Wp={start(){if($e.type==="eof")throw Dn();Ao()},beforePropertyName(){switch($e.type){case"identifier":case"string":Ja=$e.value,xe="afterPropertyName";return;case"punctuator":Ti();return;case"eof":throw Dn()}},afterPropertyName(){if($e.type==="eof")throw Dn();xe="beforePropertyValue"},beforePropertyValue(){if($e.type==="eof")throw Dn();Ao()},beforeArrayValue(){if($e.type==="eof")throw Dn();if($e.type==="punctuator"&&$e.value==="]"){Ti();return}Ao()},afterPropertyValue(){if($e.type==="eof")throw Dn();switch($e.value){case",":xe="beforePropertyName";return;case"}":Ti()}},afterArrayValue(){if($e.type==="eof")throw Dn();switch($e.value){case",":xe="beforeArrayValue";return;case"]":Ti()}},end(){}};function Ao(){let e;switch($e.type){case"punctuator":switch($e.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=$e.value;break}if(qr===void 0)qr=e;else{const t=Ut[Ut.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ja,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Ut.push(e),Array.isArray(e)?xe="beforeArrayValue":xe="beforePropertyName";else{const t=Ut[Ut.length-1];t==null?xe="end":Array.isArray(t)?xe="afterArrayValue":xe="afterPropertyValue"}}function Ti(){Ut.pop();const e=Ut[Ut.length-1];e==null?xe="end":Array.isArray(e)?xe="afterArrayValue":xe="afterPropertyValue"}function oe(e){return ls(e===void 0?`JSON5: invalid end of input at ${dn}:${bt}`:`JSON5: invalid character '${jf(e)}' at ${dn}:${bt}`)}function Dn(){return ls(`JSON5: invalid end of input at ${dn}:${bt}`)}function zu(){return bt-=5,ls(`JSON5: invalid identifier character at ${dn}:${bt}`)}function qp(e){console.warn(`JSON5: '${jf(e)}' in strings is not valid ECMAScript; consider escaping`)}function jf(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function ls(e){const t=new SyntaxError(e);return t.lineNumber=dn,t.columnNumber=bt,t}var jp=function(t,n,r){const i=[];let s="",o,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){o=[];for(const v of n){let C;typeof v=="string"?C=v:(typeof v=="number"||v instanceof String||v instanceof Number)&&(C=String(v)),C!==void 0&&o.indexOf(C)<0&&o.push(C)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),f("",{"":t});function f(v,C){let $=C[v];switch($!=null&&(typeof $.toJSON5=="function"?$=$.toJSON5(v):typeof $.toJSON=="function"&&($=$.toJSON(v))),a&&($=a.call(C,v,$)),$ instanceof Number?$=Number($):$ instanceof String?$=String($):$ instanceof Boolean&&($=$.valueOf()),$){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof $=="string")return c($);if(typeof $=="number")return String($);if(typeof $=="object")return Array.isArray($)?b($):d($)}function c(v){const C={"'":.1,'"':.2},$={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let M="";for(let W=0;W<v.length;W++){const J=v[W];switch(J){case"'":case'"':C[J]++,M+=J;continue;case"\0":if(ge.isDigit(v[W+1])){M+="\\x00";continue}}if($[J]){M+=$[J];continue}if(J<" "){let Ne=J.charCodeAt(0).toString(16);M+="\\x"+("00"+Ne).substring(Ne.length);continue}M+=J}const R=l||Object.keys(C).reduce((W,J)=>C[W]<C[J]?W:J);return M=M.replace(new RegExp(R,"g"),$[R]),R+M+R}function d(v){if(i.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");i.push(v);let C=s;s=s+u;let $=o||Object.keys(v),M=[];for(const W of $){const J=f(W,v);if(J!==void 0){let Ne=p(W)+":";u!==""&&(Ne+=" "),Ne+=J,M.push(Ne)}}let R;if(M.length===0)R="{}";else{let W;if(u==="")W=M.join(","),R="{"+W+"}";else{let J=`,
`+s;W=M.join(J),R=`{
`+s+W+`,
`+C+"}"}}return i.pop(),s=C,R}function p(v){if(v.length===0)return c(v);const C=String.fromCodePoint(v.codePointAt(0));if(!ge.isIdStartChar(C))return c(v);for(let $=C.length;$<v.length;$++)if(!ge.isIdContinueChar(String.fromCodePoint(v.codePointAt($))))return c(v);return v}function b(v){if(i.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");i.push(v);let C=s;s=s+u;let $=[];for(let R=0;R<v.length;R++){const W=f(String(R),v);$.push(W!==void 0?W:"null")}let M;if($.length===0)M="[]";else if(u==="")M="["+$.join(",")+"]";else{let R=`,
`+s,W=$.join(R);M=`[
`+s+W+`,
`+C+"]"}return i.pop(),s=C,M}};const zp={parse:Op,stringify:jp};var zf=zp;function m(e){try{return zf.stringify(e)}catch{return String(e)}}const Gp=[".",":",";",",","?","!"],Kp=new RegExp(`[${Gp.join("")}]+$`);function Gu(e){return e.replace(Kp,"")}function Le(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:m(e):""}function fi(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&Gu(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:Gu(r)).join(": "):""}function je(e){return e instanceof Error?e:new Error(Le(e))}function di(e,t){const n=je(e);return n.message=fi(t,n.message),n}var Ku;(function(e){e.Get="GET",e.Head="HEAD",e.Options="OPTIONS",e.Trace="TRACE",e.Put="PUT",e.Delete="DELETE",e.Post="POST",e.Patch="PATCH",e.Connect="CONNECT"})(Ku||(Ku={}));var y;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(y||(y={}));var x;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(x||(x={}));x.ClientError,x.ServerError;y.Continue+"",x.Information,y.SwitchingProtocols+"",x.Information,y.Processing+"",x.Information,y.EarlyHints+"",x.Information,y.Ok+"",x.Success,y.Created+"",x.Success,y.Accepted+"",x.Success,y.NonAuthoritativeInformation+"",x.Success,y.NoContent+"",x.Success,y.ResetContent+"",x.Success,y.PartialContent+"",x.Success,y.MultiStatus+"",x.Success,y.AlreadyReported+"",x.Success,y.ImUsed+"",x.Success,y.MultipleChoices+"",x.Redirect,y.MovedPermanently+"",x.Redirect,y.Found+"",x.Redirect,y.SeeOther+"",x.Redirect,y.NotModified+"",x.Redirect,y.UseProxy+"",x.Redirect,y.Unused+"",x.Redirect,y.TemporaryRedirect+"",x.Redirect,y.PermanentRedirect+"",x.Redirect,y.BadRequest+"",x.ClientError,y.Unauthorized+"",x.ClientError,y.PaymentRequired+"",x.ClientError,y.Forbidden+"",x.ClientError,y.NotFound+"",x.ClientError,y.MethodNotAllowed+"",x.ClientError,y.NotAcceptable+"",x.ClientError,y.ProxyAuthenticationRequired+"",x.ClientError,y.RequestTimeout+"",x.ClientError,y.Conflict+"",x.ClientError,y.Gone+"",x.ClientError,y.LengthRequired+"",x.ClientError,y.PreconditionFailed+"",x.ClientError,y.PayloadTooLarge+"",x.ClientError,y.UriTooLong+"",x.ClientError,y.UnsupportedMediaType+"",x.ClientError,y.RangeNotSatisfiable+"",x.ClientError,y.ExpectationFailed+"",x.ClientError,y.ImATeapot+"",x.ClientError,y.MisdirectedRequest+"",x.ClientError,y.UnprocessableContent+"",x.ClientError,y.Locked+"",x.ClientError,y.FailedDependency+"",x.ClientError,y.TooEarly+"",x.ClientError,y.UpgradeRequired+"",x.ClientError,y.PreconditionRequired+"",x.ClientError,y.TooManyRequests+"",x.ClientError,y.RequestHeaderFieldsTooLarge+"",x.ClientError,y.UnavailableForLegalReasons+"",x.ClientError,y.InternalServerError+"",x.ServerError,y.NotImplemented+"",x.ServerError,y.BadGateway+"",x.ServerError,y.ServiceUnavailable+"",x.ServerError,y.GatewayTimeout+"",x.ServerError,y.HttpVersionNotSupported+"",x.ServerError,y.VariantAlsoNegotiates+"",x.ServerError,y.InsufficientStorage+"",x.ServerError,y.LoopDetected+"",x.ServerError,y.NotExtended+"",x.ServerError,y.NetworkAuthenticationRequired+"",x.ServerError;const Hi={[x.Information]:[y.Continue,y.SwitchingProtocols,y.Processing,y.EarlyHints],[x.Success]:[y.Ok,y.Created,y.Accepted,y.NonAuthoritativeInformation,y.NoContent,y.ResetContent,y.PartialContent,y.MultiStatus,y.AlreadyReported,y.ImUsed],[x.Redirect]:[y.MultipleChoices,y.MovedPermanently,y.Found,y.SeeOther,y.NotModified,y.UseProxy,y.Unused,y.TemporaryRedirect,y.PermanentRedirect],[x.ClientError]:[y.BadRequest,y.Unauthorized,y.PaymentRequired,y.Forbidden,y.NotFound,y.MethodNotAllowed,y.NotAcceptable,y.ProxyAuthenticationRequired,y.RequestTimeout,y.Conflict,y.Gone,y.LengthRequired,y.PreconditionFailed,y.PayloadTooLarge,y.UriTooLong,y.UnsupportedMediaType,y.RangeNotSatisfiable,y.ExpectationFailed,y.ImATeapot,y.MisdirectedRequest,y.UnprocessableContent,y.Locked,y.FailedDependency,y.TooEarly,y.UpgradeRequired,y.PreconditionRequired,y.TooManyRequests,y.RequestHeaderFieldsTooLarge,y.UnavailableForLegalReasons],[x.ServerError]:[y.InternalServerError,y.NotImplemented,y.BadGateway,y.ServiceUnavailable,y.GatewayTimeout,y.HttpVersionNotSupported,y.VariantAlsoNegotiates,y.InsufficientStorage,y.LoopDetected,y.NotExtended,y.NetworkAuthenticationRequired]};function Gf({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}let Kf=class{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(je(r))}})}};class Vn extends Error{}class Zp extends Vn{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Yp extends Vn{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Jp extends Vn{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class er extends Vn{}class Zf extends Vn{constructor(t){super(`Invalid unit ${t}`)}}class Se extends Vn{}class Xt extends Vn{constructor(){super("Zone is an abstract class")}}const N="numeric",vt="short",Xe="long",cs={year:N,month:N,day:N},Yf={year:N,month:vt,day:N},Hp={year:N,month:vt,day:N,weekday:vt},Jf={year:N,month:Xe,day:N},Hf={year:N,month:Xe,day:N,weekday:Xe},Qf={hour:N,minute:N},Xf={hour:N,minute:N,second:N},ed={hour:N,minute:N,second:N,timeZoneName:vt},td={hour:N,minute:N,second:N,timeZoneName:Xe},nd={hour:N,minute:N,hourCycle:"h23"},rd={hour:N,minute:N,second:N,hourCycle:"h23"},id={hour:N,minute:N,second:N,hourCycle:"h23",timeZoneName:vt},sd={hour:N,minute:N,second:N,hourCycle:"h23",timeZoneName:Xe},od={year:N,month:N,day:N,hour:N,minute:N},ad={year:N,month:N,day:N,hour:N,minute:N,second:N},ud={year:N,month:vt,day:N,hour:N,minute:N},ld={year:N,month:vt,day:N,hour:N,minute:N,second:N},Qp={year:N,month:vt,day:N,weekday:vt,hour:N,minute:N},cd={year:N,month:Xe,day:N,hour:N,minute:N,timeZoneName:vt},fd={year:N,month:Xe,day:N,hour:N,minute:N,second:N,timeZoneName:vt},dd={year:N,month:Xe,day:N,weekday:Xe,hour:N,minute:N,timeZoneName:Xe},hd={year:N,month:Xe,day:N,weekday:Xe,hour:N,minute:N,second:N,timeZoneName:Xe};class hi{get type(){throw new Xt}get name(){throw new Xt}get ianaName(){return this.name}get isUniversal(){throw new Xt}offsetName(t,n){throw new Xt}formatOffset(t,n){throw new Xt}offset(t){throw new Xt}equals(t){throw new Xt}get isValid(){throw new Xt}}let $o=null;class Ns extends hi{static get instance(){return $o===null&&($o=new Ns),$o}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Dd(t,n,r)}formatOffset(t,n){return jr(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Qi={};function Xp(e){return Qi[e]||(Qi[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Qi[e]}const eg={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function tg(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,o,a,u,l,f]=r;return[o,i,s,a,u,l,f]}function ng(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:s,value:o}=n[i],a=eg[s];s==="era"?r[a]=o:_(a)||(r[a]=parseInt(o,10))}return r}let Mi={};class Kt extends hi{static create(t){return Mi[t]||(Mi[t]=new Kt(t)),Mi[t]}static resetCache(){Mi={},Qi={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Kt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Dd(t,n,r,this.name)}formatOffset(t,n){return jr(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=Xp(this.name);let[i,s,o,a,u,l,f]=r.formatToParts?ng(r,n):tg(r,n);a==="BC"&&(i=-Math.abs(i)+1);const d=Ps({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:f,millisecond:0});let p=+n;const b=p%1e3;return p-=b>=0?b:1e3+b,(d-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Zu={};function rg(e,t={}){const n=JSON.stringify([e,t]);let r=Zu[n];return r||(r=new Intl.ListFormat(e,t),Zu[n]=r),r}let ma={};function pa(e,t={}){const n=JSON.stringify([e,t]);let r=ma[n];return r||(r=new Intl.DateTimeFormat(e,t),ma[n]=r),r}let ga={};function ig(e,t={}){const n=JSON.stringify([e,t]);let r=ga[n];return r||(r=new Intl.NumberFormat(e,t),ga[n]=r),r}let wa={};function sg(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let s=wa[i];return s||(s=new Intl.RelativeTimeFormat(e,t),wa[i]=s),s}let Ir=null;function og(){return Ir||(Ir=new Intl.DateTimeFormat().resolvedOptions().locale,Ir)}let Yu={};function ag(e){let t=Yu[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,Yu[e]=t}return t}function ug(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=pa(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=pa(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=r;return[i,s,o]}}function lg(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function cg(e){const t=[];for(let n=1;n<=12;n++){const r=U.utc(2009,n,1);t.push(e(r))}return t}function fg(e){const t=[];for(let n=1;n<=7;n++){const r=U.utc(2016,11,13+n);t.push(e(r))}return t}function Ni(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function dg(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class hg{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...o}=r;if(!n||Object.keys(o).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=ig(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):tu(t,3);return ye(n,this.padTo)}}}class mg{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Kt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=pa(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class pg{constructor(t,n,r){this.opts={style:"long",...r},!n&&Ed()&&(this.rtf=sg(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):Og(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const gg={firstDay:1,minimalDays:4,weekend:[6,7]};class te{static fromOpts(t){return te.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,s=!1){const o=t||ue.defaultLocale,a=o||(s?"en-US":og()),u=n||ue.defaultNumberingSystem,l=r||ue.defaultOutputCalendar,f=ya(i)||ue.defaultWeekSettings;return new te(a,u,l,f,o)}static resetCache(){Ir=null,ma={},ga={},wa={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return te.create(t,n,r,i)}constructor(t,n,r,i,s){const[o,a,u]=ug(t);this.locale=o,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=lg(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=dg(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:te.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,ya(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Ni(this,t,Cd,()=>{const r=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=cg(s=>this.extract(s,r,"month"))),this.monthsCache[i][t]})}weekdays(t,n=!1){return Ni(this,t,Fd,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=fg(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Ni(this,void 0,()=>Td,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[U.utc(2016,11,13,9),U.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ni(this,t,Md,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[U.utc(-40,1,1),U.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===r);return o?o.value:null}numberFormatter(t={}){return new hg(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new mg(t,this.intl,n)}relFormatter(t={}){return new pg(this.intl,this.isEnglish(),t)}listFormatter(t={}){return rg(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:vd()?ag(this.locale):gg}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Co=null;class Pe extends hi{static get utcInstance(){return Co===null&&(Co=new Pe(0)),Co}static instance(t){return t===0?Pe.utcInstance:new Pe(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Pe(Bs(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${jr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${jr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return jr(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class wg extends hi{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function on(e,t){if(_(e)||e===null)return t;if(e instanceof hi)return e;if(Ag(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?Ns.instance:n==="utc"||n==="gmt"?Pe.utcInstance:Pe.parseSpecifier(n)||Kt.create(e)}else return cn(e)?Pe.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new wg(e)}const Ha={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ju={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},yg=Ha.hanidec.replace(/[\[|\]]/g,"").split("");function bg(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Ha.hanidec)!==-1)t+=yg.indexOf(e[n]);else for(const i in Ju){const[s,o]=Ju[i];r>=s&&r<=o&&(t+=r-s)}}return parseInt(t,10)}else return t}let Jn={};function Eg(){Jn={}}function dt({numberingSystem:e},t=""){const n=e||"latn";return Jn[n]||(Jn[n]={}),Jn[n][t]||(Jn[n][t]=new RegExp(`${Ha[n]}${t}`)),Jn[n][t]}let Hu=()=>Date.now(),Qu="system",Xu=null,el=null,tl=null,nl=60,rl,il=null;class ue{static get now(){return Hu}static set now(t){Hu=t}static set defaultZone(t){Qu=t}static get defaultZone(){return on(Qu,Ns.instance)}static get defaultLocale(){return Xu}static set defaultLocale(t){Xu=t}static get defaultNumberingSystem(){return el}static set defaultNumberingSystem(t){el=t}static get defaultOutputCalendar(){return tl}static set defaultOutputCalendar(t){tl=t}static get defaultWeekSettings(){return il}static set defaultWeekSettings(t){il=ya(t)}static get twoDigitCutoffYear(){return nl}static set twoDigitCutoffYear(t){nl=t%100}static get throwOnInvalid(){return rl}static set throwOnInvalid(t){rl=t}static resetCaches(){te.resetCache(),Kt.resetCache(),U.resetCache(),Eg()}}class wt{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const md=[0,31,59,90,120,151,181,212,243,273,304,334],pd=[0,31,60,91,121,152,182,213,244,274,305,335];function ut(e,t){return new wt("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Qa(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function gd(e,t,n){return n+(mi(e)?pd:md)[t-1]}function wd(e,t){const n=mi(e)?pd:md,r=n.findIndex(s=>s<t),i=t-n[r];return{month:r+1,day:i}}function Xa(e,t){return(e-t+7)%7+1}function fs(e,t=4,n=1){const{year:r,month:i,day:s}=e,o=gd(r,i,s),a=Xa(Qa(r,i,s),n);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=r-1,u=Yr(l,t,n)):u>Yr(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Ls(e)}}function sl(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=e,o=Xa(Qa(r,1,t),n),a=rr(r);let u=i*7+s-o-7+t,l;u<1?(l=r-1,u+=rr(l)):u>a?(l=r+1,u-=rr(r)):l=r;const{month:f,day:c}=wd(l,u);return{year:l,month:f,day:c,...Ls(e)}}function ko(e){const{year:t,month:n,day:r}=e,i=gd(t,n,r);return{year:t,ordinal:i,...Ls(e)}}function ol(e){const{year:t,ordinal:n}=e,{month:r,day:i}=wd(t,n);return{year:t,month:r,day:i,...Ls(e)}}function al(e,t){if(!_(e.localWeekday)||!_(e.localWeekNumber)||!_(e.localWeekYear)){if(!_(e.weekday)||!_(e.weekNumber)||!_(e.weekYear))throw new er("Cannot mix locale-based week fields with ISO-based week fields");return _(e.localWeekday)||(e.weekday=e.localWeekday),_(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),_(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function vg(e,t=4,n=1){const r=xs(e.weekYear),i=lt(e.weekNumber,1,Yr(e.weekYear,t,n)),s=lt(e.weekday,1,7);return r?i?s?!1:ut("weekday",e.weekday):ut("week",e.weekNumber):ut("weekYear",e.weekYear)}function Dg(e){const t=xs(e.year),n=lt(e.ordinal,1,rr(e.year));return t?n?!1:ut("ordinal",e.ordinal):ut("year",e.year)}function yd(e){const t=xs(e.year),n=lt(e.month,1,12),r=lt(e.day,1,ds(e.year,e.month));return t?n?r?!1:ut("day",e.day):ut("month",e.month):ut("year",e.year)}function bd(e){const{hour:t,minute:n,second:r,millisecond:i}=e,s=lt(t,0,23)||t===24&&n===0&&r===0&&i===0,o=lt(n,0,59),a=lt(r,0,59),u=lt(i,0,999);return s?o?a?u?!1:ut("millisecond",i):ut("second",r):ut("minute",n):ut("hour",t)}function _(e){return typeof e>"u"}function cn(e){return typeof e=="number"}function xs(e){return typeof e=="number"&&e%1===0}function Ag(e){return typeof e=="string"}function $g(e){return Object.prototype.toString.call(e)==="[object Date]"}function Ed(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function vd(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Cg(e){return Array.isArray(e)?e:[e]}function ul(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const s=[t(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}function kg(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function lr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ya(e){if(e==null)return null;if(typeof e!="object")throw new Se("Week settings must be an object");if(!lt(e.firstDay,1,7)||!lt(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!lt(t,1,7)))throw new Se("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function lt(e,t,n){return xs(e)&&e>=t&&e<=n}function Sg(e,t){return e-t*Math.floor(e/t)}function ye(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function rn(e){if(!(_(e)||e===null||e===""))return parseInt(e,10)}function An(e){if(!(_(e)||e===null||e===""))return parseFloat(e)}function eu(e){if(!(_(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function tu(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function mi(e){return e%4===0&&(e%100!==0||e%400===0)}function rr(e){return mi(e)?366:365}function ds(e,t){const n=Sg(t-1,12)+1,r=e+(t-n)/12;return n===2?mi(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Ps(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function ll(e,t,n){return-Xa(Qa(e,1,t),n)+t-1}function Yr(e,t=4,n=1){const r=ll(e,t,n),i=ll(e+1,t,n);return(rr(e)-r+i)/7}function ba(e){return e>99?e:e>ue.twoDigitCutoffYear?1900+e:2e3+e}function Dd(e,t,n,r=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(n,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Bs(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Ad(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Se(`Invalid unit value ${e}`);return t}function hs(e,t){const n={};for(const r in e)if(lr(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=Ad(i)}return n}function jr(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${ye(n,2)}:${ye(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${ye(n,2)}${ye(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Ls(e){return kg(e,["hour","minute","second","millisecond"])}const Fg=["January","February","March","April","May","June","July","August","September","October","November","December"],$d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Tg=["J","F","M","A","M","J","J","A","S","O","N","D"];function Cd(e){switch(e){case"narrow":return[...Tg];case"short":return[...$d];case"long":return[...Fg];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const kd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Sd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Mg=["M","T","W","T","F","S","S"];function Fd(e){switch(e){case"narrow":return[...Mg];case"short":return[...Sd];case"long":return[...kd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Td=["AM","PM"],Ng=["Before Christ","Anno Domini"],xg=["BC","AD"],Pg=["B","A"];function Md(e){switch(e){case"narrow":return[...Pg];case"short":return[...xg];case"long":return[...Ng];default:return null}}function Bg(e){return Td[e.hour<12?0:1]}function Lg(e,t){return Fd(t)[e.weekday-1]}function Ig(e,t){return Cd(t)[e.month-1]}function Rg(e,t){return Md(t)[e.year<0?0:1]}function Og(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&s){const c=e==="days";switch(t){case 1:return c?"tomorrow":`next ${i[e][0]}`;case-1:return c?"yesterday":`last ${i[e][0]}`;case 0:return c?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],f=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${f} ago`:`in ${a} ${f}`}function cl(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const Vg={D:cs,DD:Yf,DDD:Jf,DDDD:Hf,t:Qf,tt:Xf,ttt:ed,tttt:td,T:nd,TT:rd,TTT:id,TTTT:sd,f:od,ff:ud,fff:cd,ffff:dd,F:ad,FF:ld,FFF:fd,FFFF:hd};class Te{static create(t,n={}){return new Te(t,n)}static parseFormat(t){let n=null,r="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(t){return Vg[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return ye(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,b)=>this.loc.extract(t,p,b),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>r?Bg(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,b)=>r?Ig(t,p):s(b?{month:p}:{month:p,day:"numeric"},"month"),l=(p,b)=>r?Lg(t,p):s(b?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),f=p=>{const b=Te.macroTokenToFormatOpts(p);return b?this.formatWithSystemDefault(t,b):p},c=p=>r?Rg(t,p):s({era:p},"era"),d=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return c("short");case"GG":return c("long");case"GGGGG":return c("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(p)}};return cl(Te.parseFormat(n),d)}formatDurationFromString(t,n){const r=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const f=r(l);return f?this.num(u.get(f),l.length):l},s=Te.parseFormat(n),o=s.reduce((u,{literal:l,val:f})=>l?u:u.concat(f),[]),a=t.shiftTo(...o.map(r).filter(u=>u));return cl(s,i(a))}}const Nd=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function vr(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Dr(...e){return t=>e.reduce(([n,r,i],s)=>{const[o,a,u]=s(t,i);return[{...n,...o},a||r,u]},[{},null,1]).slice(0,2)}function Ar(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function xd(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=rn(t[n+i]);return[r,null,n+i]}}const Pd=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,_g=`(?:${Pd.source}?(?:\\[(${Nd.source})\\])?)?`,nu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Bd=RegExp(`${nu.source}${_g}`),ru=RegExp(`(?:T${Bd.source})?`),Ug=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Wg=/(\d{4})-?W(\d\d)(?:-?(\d))?/,qg=/(\d{4})-?(\d{3})/,jg=xd("weekYear","weekNumber","weekDay"),zg=xd("year","ordinal"),Gg=/(\d{4})-(\d\d)-(\d\d)/,Ld=RegExp(`${nu.source} ?(?:${Pd.source}|(${Nd.source}))?`),Kg=RegExp(`(?: ${Ld.source})?`);function ir(e,t,n){const r=e[t];return _(r)?n:rn(r)}function Zg(e,t){return[{year:ir(e,t),month:ir(e,t+1,1),day:ir(e,t+2,1)},null,t+3]}function $r(e,t){return[{hours:ir(e,t,0),minutes:ir(e,t+1,0),seconds:ir(e,t+2,0),milliseconds:eu(e[t+3])},null,t+4]}function pi(e,t){const n=!e[t]&&!e[t+1],r=Bs(e[t+1],e[t+2]),i=n?null:Pe.instance(r);return[{},i,t+3]}function gi(e,t){const n=e[t]?Kt.create(e[t]):null;return[{},n,t+1]}const Yg=RegExp(`^T?${nu.source}$`),Jg=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Hg(e){const[t,n,r,i,s,o,a,u,l]=e,f=t[0]==="-",c=u&&u[0]==="-",d=(p,b=!1)=>p!==void 0&&(b||p&&f)?-p:p;return[{years:d(An(n)),months:d(An(r)),weeks:d(An(i)),days:d(An(s)),hours:d(An(o)),minutes:d(An(a)),seconds:d(An(u),u==="-0"),milliseconds:d(eu(l),c)}]}const Qg={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function iu(e,t,n,r,i,s,o){const a={year:t.length===2?ba(rn(t)):rn(t),month:$d.indexOf(n)+1,day:rn(r),hour:rn(i),minute:rn(s)};return o&&(a.second=rn(o)),e&&(a.weekday=e.length>3?kd.indexOf(e)+1:Sd.indexOf(e)+1),a}const Xg=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function ew(e){const[,t,n,r,i,s,o,a,u,l,f,c]=e,d=iu(t,i,r,n,s,o,a);let p;return u?p=Qg[u]:l?p=0:p=Bs(f,c),[d,new Pe(p)]}function tw(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const nw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,rw=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,iw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function fl(e){const[,t,n,r,i,s,o,a]=e;return[iu(t,i,r,n,s,o,a),Pe.utcInstance]}function sw(e){const[,t,n,r,i,s,o,a]=e;return[iu(t,a,n,r,i,s,o),Pe.utcInstance]}const ow=vr(Ug,ru),aw=vr(Wg,ru),uw=vr(qg,ru),lw=vr(Bd),Id=Dr(Zg,$r,pi,gi),cw=Dr(jg,$r,pi,gi),fw=Dr(zg,$r,pi,gi),dw=Dr($r,pi,gi);function hw(e){return Ar(e,[ow,Id],[aw,cw],[uw,fw],[lw,dw])}function mw(e){return Ar(tw(e),[Xg,ew])}function pw(e){return Ar(e,[nw,fl],[rw,fl],[iw,sw])}function gw(e){return Ar(e,[Jg,Hg])}const ww=Dr($r);function yw(e){return Ar(e,[Yg,ww])}const bw=vr(Gg,Kg),Ew=vr(Ld),vw=Dr($r,pi,gi);function Dw(e){return Ar(e,[bw,Id],[Ew,vw])}const dl="Invalid Duration",Rd={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Aw={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Rd},rt=146097/400,Un=146097/4800,$w={years:{quarters:4,months:12,weeks:rt/7,days:rt,hours:rt*24,minutes:rt*24*60,seconds:rt*24*60*60,milliseconds:rt*24*60*60*1e3},quarters:{months:3,weeks:rt/28,days:rt/4,hours:rt*24/4,minutes:rt*24*60/4,seconds:rt*24*60*60/4,milliseconds:rt*24*60*60*1e3/4},months:{weeks:Un/7,days:Un,hours:Un*24,minutes:Un*24*60,seconds:Un*24*60*60,milliseconds:Un*24*60*60*1e3},...Rd},Nn=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Cw=Nn.slice(0).reverse();function en(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new Y(r)}function Od(e,t){let n=t.milliseconds??0;for(const r of Cw.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function hl(e,t){const n=Od(e,t)<0?-1:1;Nn.reduceRight((r,i)=>{if(_(t[i]))return r;if(r){const s=t[r]*n,o=e[i][r],a=Math.floor(s/o);t[i]+=a*n,t[r]-=a*o*n}return i},null),Nn.reduce((r,i)=>{if(_(t[i]))return r;if(r){const s=t[r]%1;t[r]-=s,t[i]+=s*e[r][i]}return i},null)}function kw(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class Y{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?$w:Aw;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||te.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return Y.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new Se(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new Y({values:hs(t,Y.normalizeUnit),loc:te.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(cn(t))return Y.fromMillis(t);if(Y.isDuration(t))return t;if(typeof t=="object")return Y.fromObject(t);throw new Se(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=gw(t);return r?Y.fromObject(r,n):Y.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=yw(t);return r?Y.fromObject(r,n):Y.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Se("need to specify a reason the Duration is invalid");const r=t instanceof wt?t:new wt(t,n);if(ue.throwOnInvalid)throw new Jp(r);return new Y({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new Zf(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Te.create(this.loc,r).formatDurationFromString(this,t):dl}toHuman(t={}){if(!this.isValid)return dl;const n=Nn.map(r=>{const i=this.values[r];return _(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=tu(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},U.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Od(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=Y.fromDurationLike(t),r={};for(const i of Nn)(lr(n.values,i)||lr(this.values,i))&&(r[i]=n.get(i)+this.get(i));return en(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=Y.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=Ad(t(this.values[r],r));return en(this,{values:n},!0)}get(t){return this[Y.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...hs(t,Y.normalizeUnit)};return en(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return en(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return hl(this.matrix,t),en(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=kw(this.normalize().shiftToAll().toObject());return en(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>Y.normalizeUnit(o));const n={},r={},i=this.toObject();let s;for(const o of Nn)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in r)a+=this.matrix[l][o]*r[l],r[l]=0;cn(i[o])&&(a+=i[o]);const u=Math.trunc(a);n[o]=u,r[o]=(a*1e3-u*1e3)/1e3}else cn(i[o])&&(r[o]=i[o]);for(const o in r)r[o]!==0&&(n[s]+=o===s?r[o]:r[o]/this.matrix[s][o]);return hl(this.matrix,n),en(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return en(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of Nn)if(!n(this.values[r],t.values[r]))return!1;return!0}}const Wn="Invalid Interval";function Sw(e,t){return!e||!e.isValid?me.invalid("missing or invalid start"):!t||!t.isValid?me.invalid("missing or invalid end"):t<e?me.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class me{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Se("need to specify a reason the Interval is invalid");const r=t instanceof wt?t:new wt(t,n);if(ue.throwOnInvalid)throw new Yp(r);return new me({invalid:r})}static fromDateTimes(t,n){const r=Fr(t),i=Fr(n),s=Sw(r,i);return s??new me({start:r,end:i})}static after(t,n){const r=Y.fromDurationLike(n),i=Fr(t);return me.fromDateTimes(i,i.plus(r))}static before(t,n){const r=Y.fromDurationLike(n),i=Fr(t);return me.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let s,o;try{s=U.fromISO(r,n),o=s.isValid}catch{o=!1}let a,u;try{a=U.fromISO(i,n),u=a.isValid}catch{u=!1}if(o&&u)return me.fromDateTimes(s,a);if(o){const l=Y.fromISO(i,n);if(l.isValid)return me.after(s,l)}else if(u){const l=Y.fromISO(r,n);if(l.isValid)return me.before(a,l)}}return me.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?me.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Fr).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const o=n[s]||this.e,a=+o>+this.e?this.e:o;r.push(me.fromDateTimes(i,a)),i=a,s+=1}return r}splitBy(t){const n=Y.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const o=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(me.fromDateTimes(r,s)),r=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:me.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return me.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(me.fromDateTimes(n,u.time)),n=null);return me.merge(i)}difference(...t){return me.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Wn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=cs,n={}){return this.isValid?Te.create(this.s.loc.clone(n),t).formatInterval(this):Wn}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Wn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Wn}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Wn}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:Wn}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):Y.invalid(this.invalidReason)}mapEndpoints(t){return me.fromDateTimes(t(this.s),t(this.e))}}class xi{static hasDST(t=ue.defaultZone){const n=U.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Kt.isValidZone(t)}static normalizeZone(t){return on(t,ue.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||te.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||te.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||te.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||te.create(n,r,s)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||te.create(n,r,s)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||te.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||te.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return te.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return te.create(n,null,"gregory").eras(t)}static features(){return{relative:Ed(),localeWeek:vd()}}}function ml(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(Y.fromMillis(r).as("days"))}function Fw(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const f=ml(u,l);return(f-f%7)/7}],["days",ml]],i={},s=e;let o,a;for(const[u,l]of r)n.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Tw(e,t,n,r){let[i,s,o,a]=Fw(e,t,n);const u=t-i,l=n.filter(c=>["hours","minutes","seconds","milliseconds"].indexOf(c)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const f=Y.fromObject(s,r);return l.length>0?Y.fromMillis(u,r).shiftTo(...l).plus(f):f}const Mw="missing Intl.DateTimeFormat.formatToParts support";function H(e,t=n=>n){return{regex:e,deser:([n])=>t(bg(n))}}const Nw=" ",Vd=`[ ${Nw}]`,_d=new RegExp(Vd,"g");function xw(e){return e.replace(/\./g,"\\.?").replace(_d,Vd)}function pl(e){return e.replace(/\./g,"").replace(_d," ").toLowerCase()}function ht(e,t){return e===null?null:{regex:RegExp(e.map(xw).join("|")),deser:([n])=>e.findIndex(r=>pl(n)===pl(r))+t}}function gl(e,t){return{regex:e,deser:([,n,r])=>Bs(n,r),groups:t}}function Pi(e){return{regex:e,deser:([t])=>t}}function Pw(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Bw(e,t){const n=dt(t),r=dt(t,"{2}"),i=dt(t,"{3}"),s=dt(t,"{4}"),o=dt(t,"{6}"),a=dt(t,"{1,2}"),u=dt(t,"{1,3}"),l=dt(t,"{1,6}"),f=dt(t,"{1,9}"),c=dt(t,"{2,4}"),d=dt(t,"{4,6}"),p=C=>({regex:RegExp(Pw(C.val)),deser:([$])=>$,literal:!0}),v=(C=>{if(e.literal)return p(C);switch(C.val){case"G":return ht(t.eras("short"),0);case"GG":return ht(t.eras("long"),0);case"y":return H(l);case"yy":return H(c,ba);case"yyyy":return H(s);case"yyyyy":return H(d);case"yyyyyy":return H(o);case"M":return H(a);case"MM":return H(r);case"MMM":return ht(t.months("short",!0),1);case"MMMM":return ht(t.months("long",!0),1);case"L":return H(a);case"LL":return H(r);case"LLL":return ht(t.months("short",!1),1);case"LLLL":return ht(t.months("long",!1),1);case"d":return H(a);case"dd":return H(r);case"o":return H(u);case"ooo":return H(i);case"HH":return H(r);case"H":return H(a);case"hh":return H(r);case"h":return H(a);case"mm":return H(r);case"m":return H(a);case"q":return H(a);case"qq":return H(r);case"s":return H(a);case"ss":return H(r);case"S":return H(u);case"SSS":return H(i);case"u":return Pi(f);case"uu":return Pi(a);case"uuu":return H(n);case"a":return ht(t.meridiems(),0);case"kkkk":return H(s);case"kk":return H(c,ba);case"W":return H(a);case"WW":return H(r);case"E":case"c":return H(n);case"EEE":return ht(t.weekdays("short",!1),1);case"EEEE":return ht(t.weekdays("long",!1),1);case"ccc":return ht(t.weekdays("short",!0),1);case"cccc":return ht(t.weekdays("long",!0),1);case"Z":case"ZZ":return gl(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return gl(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Pi(/[a-z_+-/]{1,256}?/i);case" ":return Pi(/[^\S\n\r]/);default:return p(C)}})(e)||{invalidReason:Mw};return v.token=e,v}const Lw={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Iw(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[r];let o=r;r==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=n.hour12?"hour12":"hour24");let a=Lw[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function Rw(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function Ow(e,t,n){const r=e.match(t);if(r){const i={};let s=1;for(const o in n)if(lr(n,o)){const a=n[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(s,s+u))),s+=u}return[r,i]}else return[r,{}]}function Vw(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return _(e.z)||(n=Kt.create(e.z)),_(e.Z)||(n||(n=new Pe(e.Z)),r=e.Z),_(e.q)||(e.M=(e.q-1)*3+1),_(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),_(e.u)||(e.S=eu(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),n,r]}let So=null;function _w(){return So||(So=U.fromMillis(1555555555555)),So}function Uw(e,t){if(e.literal)return e;const n=Te.macroTokenToFormatOpts(e.val),r=jd(n,t);return r==null||r.includes(void 0)?e:r}function Ud(e,t){return Array.prototype.concat(...e.map(n=>Uw(n,t)))}class Wd{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=Ud(Te.parseFormat(n),t),this.units=this.tokens.map(r=>Bw(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=Rw(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=Ow(t,this.regex,this.handlers),[i,s,o]=r?Vw(r):[null,null,void 0];if(lr(r,"a")&&lr(r,"H"))throw new er("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function qd(e,t,n){return new Wd(e,n).explainFromTokens(t)}function Ww(e,t,n){const{result:r,zone:i,specificOffset:s,invalidReason:o}=qd(e,t,n);return[r,i,s,o]}function jd(e,t){if(!e)return null;const r=Te.create(t,e).dtFormatter(_w()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(o=>Iw(o,e,s))}const Fo="Invalid DateTime",qw=864e13;function Rr(e){return new wt("unsupported zone",`the zone "${e.name}" is not supported`)}function To(e){return e.weekData===null&&(e.weekData=fs(e.c)),e.weekData}function Mo(e){return e.localWeekData===null&&(e.localWeekData=fs(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function $n(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new U({...n,...t,old:n})}function zd(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function Bi(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Xi(e,t,n){return zd(Ps(e),t,n)}function wl(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:r,month:i,day:Math.min(e.c.day,ds(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=Y.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Ps(s);let[u,l]=zd(a,n,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function qn(e,t,n,r,i,s){const{setZone:o,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=U.fromObject(e,{...n,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return U.invalid(new wt("unparsable",`the input "${i}" can't be parsed as ${r}`))}function Li(e,t,n=!0){return e.isValid?Te.create(te.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function No(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=ye(e.c.year,n?6:4),t?(r+="-",r+=ye(e.c.month),r+="-",r+=ye(e.c.day)):(r+=ye(e.c.month),r+=ye(e.c.day)),r}function yl(e,t,n,r,i,s){let o=ye(e.c.hour);return t?(o+=":",o+=ye(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=":")):o+=ye(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=ye(e.c.second),(e.c.millisecond!==0||!r)&&(o+=".",o+=ye(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=ye(Math.trunc(-e.o/60)),o+=":",o+=ye(Math.trunc(-e.o%60))):(o+="+",o+=ye(Math.trunc(e.o/60)),o+=":",o+=ye(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const Gd={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},jw={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},zw={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Kd=["year","month","day","hour","minute","second","millisecond"],Gw=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Kw=["year","ordinal","hour","minute","second","millisecond"];function Zw(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Zf(e);return t}function bl(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Zw(e)}}function Yw(e){return ts[e]||(es===void 0&&(es=ue.now()),ts[e]=e.offset(es)),ts[e]}function El(e,t){const n=on(t.zone,ue.defaultZone);if(!n.isValid)return U.invalid(Rr(n));const r=te.fromObject(t);let i,s;if(_(e.year))i=ue.now();else{for(const u of Kd)_(e[u])&&(e[u]=Gd[u]);const o=yd(e)||bd(e);if(o)return U.invalid(o);const a=Yw(n);[i,s]=Xi(e,a,n)}return new U({ts:i,zone:n,loc:r,o:s})}function vl(e,t,n){const r=_(n.round)?!0:n.round,i=(o,a)=>(o=tu(o,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(o,a)),s=o=>n.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(n.unit)return i(s(n.unit),n.unit);for(const o of n.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,n.units[n.units.length-1])}function Dl(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let es,ts={};class U{constructor(t){const n=t.zone||ue.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new wt("invalid input"):null)||(n.isValid?null:Rr(n));this.ts=_(t.ts)?ue.now():t.ts;let i=null,s=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,s]=[t.old.c,t.old.o];else{const a=cn(t.o)&&!t.old?t.o:n.offset(this.ts);i=Bi(this.ts,a),r=Number.isNaN(i.year)?new wt("invalid input"):null,i=r?null:i,s=r?null:a}this._zone=n,this.loc=t.loc||te.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new U({})}static local(){const[t,n]=Dl(arguments),[r,i,s,o,a,u,l]=n;return El({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=Dl(arguments),[r,i,s,o,a,u,l]=n;return t.zone=Pe.utcInstance,El({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=$g(t)?t.valueOf():NaN;if(Number.isNaN(r))return U.invalid("invalid input");const i=on(n.zone,ue.defaultZone);return i.isValid?new U({ts:r,zone:i,loc:te.fromObject(n)}):U.invalid(Rr(i))}static fromMillis(t,n={}){if(cn(t))return t<-864e13||t>qw?U.invalid("Timestamp out of range"):new U({ts:t,zone:on(n.zone,ue.defaultZone),loc:te.fromObject(n)});throw new Se(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(cn(t))return new U({ts:t*1e3,zone:on(n.zone,ue.defaultZone),loc:te.fromObject(n)});throw new Se("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=on(n.zone,ue.defaultZone);if(!r.isValid)return U.invalid(Rr(r));const i=te.fromObject(n),s=hs(t,bl),{minDaysInFirstWeek:o,startOfWeek:a}=al(s,i),u=ue.now(),l=_(n.specificOffset)?r.offset(u):n.specificOffset,f=!_(s.ordinal),c=!_(s.year),d=!_(s.month)||!_(s.day),p=c||d,b=s.weekYear||s.weekNumber;if((p||f)&&b)throw new er("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&f)throw new er("Can't mix ordinal dates with month/day");const v=b||s.weekday&&!p;let C,$,M=Bi(u,l);v?(C=Gw,$=jw,M=fs(M,o,a)):f?(C=Kw,$=zw,M=ko(M)):(C=Kd,$=Gd);let R=!1;for(const Ct of C){const Pt=s[Ct];_(Pt)?R?s[Ct]=$[Ct]:s[Ct]=M[Ct]:R=!0}const W=v?vg(s,o,a):f?Dg(s):yd(s),J=W||bd(s);if(J)return U.invalid(J);const Ne=v?sl(s,o,a):f?ol(s):s,[ft,Ie]=Xi(Ne,l,r),Ke=new U({ts:ft,zone:r,o:Ie,loc:i});return s.weekday&&p&&t.weekday!==Ke.weekday?U.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Ke.toISO()}`):Ke.isValid?Ke:U.invalid(Ke.invalid)}static fromISO(t,n={}){const[r,i]=hw(t);return qn(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=mw(t);return qn(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=pw(t);return qn(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(_(t)||_(n))throw new Se("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,o=te.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,f]=Ww(o,t,n);return f?U.invalid(f):qn(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return U.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=Dw(t);return qn(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new Se("need to specify a reason the DateTime is invalid");const r=t instanceof wt?t:new wt(t,n);if(ue.throwOnInvalid)throw new Zp(r);return new U({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=jd(t,te.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return Ud(Te.parseFormat(t),te.fromObject(n)).map(i=>i.val).join("")}static resetCache(){es=void 0,ts={}}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?To(this).weekYear:NaN}get weekNumber(){return this.isValid?To(this).weekNumber:NaN}get weekday(){return this.isValid?To(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Mo(this).weekday:NaN}get localWeekNumber(){return this.isValid?Mo(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Mo(this).weekYear:NaN}get ordinal(){return this.isValid?ko(this.c).ordinal:NaN}get monthShort(){return this.isValid?xi.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?xi.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?xi.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?xi.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Ps(this.c),i=this.zone.offset(r-t),s=this.zone.offset(r+t),o=this.zone.offset(r-i*n),a=this.zone.offset(r-s*n);if(o===a)return[this];const u=r-o*n,l=r-a*n,f=Bi(u,o),c=Bi(l,a);return f.hour===c.hour&&f.minute===c.minute&&f.second===c.second&&f.millisecond===c.millisecond?[$n(this,{ts:u}),$n(this,{ts:l})]:[this]}get isInLeapYear(){return mi(this.year)}get daysInMonth(){return ds(this.year,this.month)}get daysInYear(){return this.isValid?rr(this.year):NaN}get weeksInWeekYear(){return this.isValid?Yr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Yr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Te.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Pe.instance(t),n)}toLocal(){return this.setZone(ue.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=on(t,ue.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const s=t.offset(this.ts),o=this.toObject();[i]=Xi(o,s,t)}return $n(this,{ts:i,zone:t})}else return U.invalid(Rr(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return $n(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=hs(t,bl),{minDaysInFirstWeek:r,startOfWeek:i}=al(n,this.loc),s=!_(n.weekYear)||!_(n.weekNumber)||!_(n.weekday),o=!_(n.ordinal),a=!_(n.year),u=!_(n.month)||!_(n.day),l=a||u,f=n.weekYear||n.weekNumber;if((l||o)&&f)throw new er("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new er("Can't mix ordinal dates with month/day");let c;s?c=sl({...fs(this.c,r,i),...n},r,i):_(n.ordinal)?(c={...this.toObject(),...n},_(n.day)&&(c.day=Math.min(ds(c.year,c.month),c.day))):c=ol({...ko(this.c),...n});const[d,p]=Xi(c,this.o,this.zone);return $n(this,{ts:d,o:p})}plus(t){if(!this.isValid)return this;const n=Y.fromDurationLike(t);return $n(this,wl(this,n))}minus(t){if(!this.isValid)return this;const n=Y.fromDurationLike(t).negate();return $n(this,wl(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=Y.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Te.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):Fo}toLocaleString(t=cs,n={}){return this.isValid?Te.create(this.loc.clone(n),t).formatDateTime(this):Fo}toLocaleParts(t={}){return this.isValid?Te.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=No(this,o);return a+="T",a+=yl(this,o,n,r,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?No(this,t==="extended"):null}toISOWeekDate(){return Li(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+yl(this,o==="extended",n,t,r,s):null}toRFC2822(){return Li(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Li(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?No(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Li(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Fo}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return Y.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=Cg(n).map(Y.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Tw(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(U.now(),t,n)}until(t){return this.isValid?me.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||U.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),vl(n,this.plus(r),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?vl(t.base||U.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(U.isDateTime))throw new Se("min requires all arguments be DateTimes");return ul(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(U.isDateTime))throw new Se("max requires all arguments be DateTimes");return ul(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,o=te.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return qd(o,t,n)}static fromStringExplain(t,n,r={}){return U.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,s=te.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new Wd(s,t)}static fromFormatParser(t,n,r={}){if(_(t)||_(n))throw new Se("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=r,o=te.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(n.locale))throw new Se(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:f}=n.explainFromTokens(t);return f?U.invalid(f):qn(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return cs}static get DATE_MED(){return Yf}static get DATE_MED_WITH_WEEKDAY(){return Hp}static get DATE_FULL(){return Jf}static get DATE_HUGE(){return Hf}static get TIME_SIMPLE(){return Qf}static get TIME_WITH_SECONDS(){return Xf}static get TIME_WITH_SHORT_OFFSET(){return ed}static get TIME_WITH_LONG_OFFSET(){return td}static get TIME_24_SIMPLE(){return nd}static get TIME_24_WITH_SECONDS(){return rd}static get TIME_24_WITH_SHORT_OFFSET(){return id}static get TIME_24_WITH_LONG_OFFSET(){return sd}static get DATETIME_SHORT(){return od}static get DATETIME_SHORT_WITH_SECONDS(){return ad}static get DATETIME_MED(){return ud}static get DATETIME_MED_WITH_SECONDS(){return ld}static get DATETIME_MED_WITH_WEEKDAY(){return Qp}static get DATETIME_FULL(){return cd}static get DATETIME_FULL_WITH_SECONDS(){return fd}static get DATETIME_HUGE(){return dd}static get DATETIME_HUGE_WITH_SECONDS(){return hd}}function Fr(e){if(U.isDateTime(e))return e;if(e&&e.valueOf&&cn(e.valueOf()))return U.fromJSDate(e);if(e&&typeof e=="object")return U.fromObject(e);throw new Se(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var O;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(O||(O={}));O.Years+"",O.Quarters+"",O.Months+"",O.Weeks+"",O.Days+"",O.Hours+"",O.Minutes+"",O.Seconds+"",O.Milliseconds+"";O.Years+"",O.Quarters+"",O.Months+"",O.Weeks+"",O.Days+"",O.Hours+"",O.Minutes+"",O.Seconds+"",O.Milliseconds+"";const Zd=[O.Milliseconds,O.Seconds,O.Minutes,O.Hours,O.Days,O.Weeks,O.Months,O.Quarters,O.Years];O.Milliseconds+"",O.Seconds+"",O.Minutes+"",O.Hours+"",O.Days+"",O.Weeks+"",O.Months+"",O.Quarters+"",O.Years+"";function Jw(e){return Zd.filter(t=>e[t])}function Ea(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function Hw(e){return Ea(Math.max(e-.4,0),{roundToDigits:0})}function Al(e){return e===0?0:Math.sign(e)}function Dt(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=Y.fromObject(e).as(O.Milliseconds);const u=Jw(t).reverse(),l=Al(a);u.forEach((p,b)=>{const v=b===u.length-1;if(s&&o||s)r[p]=1/0;else if(o)r[p]=-1/0;else if(p===O.Milliseconds)r.milliseconds=Ea(a,i);else{const C=Y.fromObject({milliseconds:a}).as(p),$=Math.sign(C),M=Math.abs(C),R=v?Ea(M,i):Math.floor(i.roundToDigits==null?M:Hw(M)),W=R===0?0:R*$;r[p]=W,a-=Y.fromObject({[p]:W}).as(O.Milliseconds),l!==Al(a)&&(a=0)}});let f=!1;const c=[],d=Zd.toReversed().filter(p=>r[p]?(f=!0,!0):f?(c.push(p),!1):!0);if(d.length<u.length){const p={};d.forEach(v=>p[v]=!0);const b=Dt(e,p,i);return c.forEach(v=>b[v]=0),b}return r}var I;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(I||(I={}));I.Year,I.Hour,I.Minute,I.Second,I.Millisecond;I.Quarter,I.Month,I.Week,I.Day;I.Millisecond,I.Second,I.Minute,I.Hour,I.Day,I.Week,I.Month,I.Quarter,I.Year;var Fe;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(Fe||(Fe={}));Fe.Sunday+"",Fe.Monday+"",Fe.Tuesday+"",Fe.Wednesday+"",Fe.Thursday+"",Fe.Friday+"",Fe.Saturday+"";Fe.Sunday,Fe.Monday,Fe.Tuesday,Fe.Wednesday,Fe.Thursday,Fe.Friday,Fe.Saturday;var Ve;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Ve||(Ve={}));Ve.January,Ve.February,Ve.March,Ve.April,Ve.May,Ve.June,Ve.July,Ve.August,Ve.September,Ve.October,Ve.November,Ve.December;const $l={min:1,max:12},Cl={min:1,max:31},kl={min:0,max:23},Sl={min:0,max:59},Fl={min:0,max:59},Tl={min:0,max:999};function Jr(e){const t=new Kf,n=Dt(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var Yd=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Zt;(function(e){e.Node="node",e.Web="web"})(Zt||(Zt={}));function Qw(){return Yd?Zt.Node:Zt.Web}const Jd=Qw();function Xw(e){return Jd===e}function Hd(e){return e[Jd]()}let h=class extends Error{name="AssertionError";constructor(t,n){super(fi(n,t)||"Assertion failed.")}};const Ml={interval:{milliseconds:100},timeout:{seconds:10}},xo=Symbol("not set");async function Qd(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=ey(t),a=Dt(o.timeout,{milliseconds:!0}).milliseconds,u=Dt(o.interval,{milliseconds:!0});let l=xo,f;async function c(){try{l=n?r():await r(),e(l,...i)}catch(p){l=xo,f=je(p)}}const d=Date.now();for(;l===xo;)if(await c(),await Jr(u),Date.now()-d>=a){const b=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw di(f,b)}return l}function S(e,t=!1){return(...n)=>Qd(e,n,t)}function ey(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Xd(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Xd(e){return{interval:e?.interval||Ml.interval,timeout:e?.timeout||Ml.timeout}}const Tr={isFalse(e,t){if(e!==!1)throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new h(`'${m(e)}' is not truthy.`,t)}},eh={assert:Tr,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new h(`'${m(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:S(Tr.isFalse),isFalsy:S(Tr.isFalsy),isTrue:S(Tr.isTrue),isTruthy:S(Tr.isTruthy)}};function ty(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n)}function ny(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n)}function ry(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n)}function iy(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n)}const Mr={endsWith:ty,endsWithout:ny,startsWith:ry,startsWithout:iy},th={assert:Mr,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n);return e},endsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n);return e},startsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n);return e},startsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:S(Mr.endsWith),endsWithout:S(Mr.endsWithout),startsWith:S(Mr.startsWith),startsWithout:S(Mr.startsWithout)}};function sy(e,t,n){const r=_t(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function Ot(e,t){return _t(t).includes(e)}const Po={isEnumValue(e,t,n){sy(e,t,n)},isNotEnumValue(e,t,n){const r=_t(t);if(r.includes(e))throw new h(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},nh={assert:Po,check:{isEnumValue:Ot,isNotEnumValue(e,t){return!_t(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=_t(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=_t(t);if(r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(_t(t).includes(e))return e},isNotEnumValue(e,t){if(!_t(t).includes(e))return e}},waitUntil:{isEnumValue:S(Po.isEnumValue),isNotEnumValue:S(Po.isNotEnumValue)}},Bo={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new h(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new h("Entries are equal.",n)}},rh={assert:Bo,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],s=t[r];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],s=t[r];return i!==s})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new h(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new h("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:S(Bo.entriesEqual),notEntriesEqual:S(Bo.notEntriesEqual)}};function ms(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Hr(e,t){if(!(e===t||ms(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!ms(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{Hr(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${Le(o)}`)}})}throw new Error("Values are not JSON equal.")}}function Or(e,t){if(e===t||ms(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!ms(n,r)?!1:Object.keys(e).every(s=>Or(e[s],t[s]))}return!1}const Lo={jsonEquals(e,t,n){try{Hr(e,t)}catch(r){throw new h(Le(r),n)}},notJsonEquals(e,t,n){try{Hr(e,t)}catch{return}throw new h("Values are JSON equal.",n)}},ih={assert:Lo,check:{jsonEquals(e,t){return Or(e,t)},notJsonEquals(e,t){return!Or(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Hr(e,t),e}catch(r){throw new h(Le(r),n)}},notJsonEquals(e,t,n){try{Hr(e,t)}catch{return e}throw new h("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(Or(e,t))return e},notJsonEquals(e,t){if(!Or(e,t))return e}},waitUntil:{jsonEquals:S(Lo.jsonEquals),notJsonEquals:S(Lo.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Nl(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function sh(){this._key="chai/deep-eql__"+Math.random()+Date.now()}sh.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var oh=typeof WeakMap=="function"?WeakMap:sh;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function xl(e,t,n){if(!n||cr(e)||cr(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Ii(e,t,n,r){if(!(!n||cr(e)||cr(t))){var i=n.get(e);i?i.set(t,r):(i=new oh,i.set(t,r),n.set(e,i))}}function Je(e,t,n){if(n&&n.comparator)return Pl(e,t,n);var r=ah(e,t);return r!==null?r:Pl(e,t,n)}function ah(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:cr(e)||cr(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Pl(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new oh;var r=n&&n.comparator,i=xl(e,t,n.memoize);if(i!==null)return i;var s=xl(t,e,n.memoize);if(s!==null)return s;if(r){var o=r(e,t);if(o===!1||o===!0)return Ii(e,t,n.memoize,o),o;var a=ah(e,t);if(a!==null)return a}var u=Nl(e);if(u!==Nl(t))return Ii(e,t,n.memoize,!1),!1;Ii(e,t,n.memoize,!0);var l=oy(e,t,u,n);return Ii(e,t,n.memoize,l),l}function oy(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Je(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return uh(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ln(e,t,r);case"RegExp":return ay(e,t);case"Generator":return uy(e,t,r);case"DataView":return Ln(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return Ln(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Bl(e,t,r);case"Map":return Bl(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return cy(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function ay(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Bl(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(o,a){r.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),Ln(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ln(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Je(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function uy(e,t,n){return Ln(va(e),va(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function ly(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Ll(e){if(ly(e))try{return va(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function va(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Il(e){var t=[];for(var n in e)t.push(n);return t}function Rl(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function uh(e,t,n,r){var i=n.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(Je(e[n[s]],t[n[s]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function cy(e,t,n){var r=Il(e),i=Il(t),s=Rl(e),o=Rl(t);if(r=r.concat(s),i=i.concat(o),r.length&&r.length===i.length)return Ln(Ol(r).sort(),Ol(i).sort())===!1?!1:uh(e,t,r,n);var a=Ll(e),u=Ll(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Ln(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function cr(e){return e===null||typeof e!="object"}function Ol(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}const nn={strictEquals(e,t,n){if(e!==t)throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n)},deepEquals(e,t,n){if(!Je(e,t))throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Je(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n)}},lh=nn.deepEquals,ch={assert:nn,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Je(e,t)},notDeepEquals(e,t){return!Je(e,t)}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n);return e},deepEquals(e,t,n){if(Je(e,t))return e;throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Je(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Je(e,t))return e},notDeepEquals(e,t){if(!Je(e,t))return e}},waitUntil:{strictEquals:S(nn.strictEquals),notStrictEquals:S(nn.notStrictEquals),looseEquals:S(nn.looseEquals),notLooseEquals:S(nn.notLooseEquals),deepEquals:S(nn.deepEquals),notDeepEquals:S(nn.notDeepEquals)}};function Ye(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function st(e,t){return typeof t=="string"?t.includes(e):Ye(t,e)}const Lt={hasValue(e,t,n){if(!Ye(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n)},lacksValue(e,t,n){if(Ye(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n)},isIn(e,t,n){if(!st(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n)},isNotIn(e,t,n){if(st(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is not empty.`,t)}}},fh={assert:Lt,check:{hasValue(e,t){return Ye(e,t)},lacksValue(e,t){return!Ye(e,t)},hasValues(e,t){return t.every(n=>Ye(e,n))},lacksValues(e,t){return t.every(n=>!Ye(e,n))},isIn(e,t){return st(e,t)},isNotIn(e,t){return!st(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!Ye(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n);return e},lacksValue(e,t,n){if(Ye(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n);return e},isIn(e,t,n){if(!st(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n);return e},isNotIn(e,t,n){if(st(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Ye(e,t))return e},lacksValue(e,t){if(!Ye(e,t))return e},hasValues(e,t){if(t.every(n=>Ye(e,n)))return e},lacksValues(e,t){if(!t.every(n=>Ye(e,n)))return e},isIn(e,t){if(st(e,t))return e},isNotIn(e,t){if(!st(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:S(Lt.hasValue),lacksValue:S(Lt.lacksValue),hasValues:S(Lt.hasValues),lacksValues:S(Lt.lacksValues),isIn:S(Lt.isIn),isNotIn:S(Lt.isNotIn),isEmpty:S(Lt.isEmpty),isNotEmpty:S(Lt.isNotEmpty)}},Io={isHttpStatus(e,t){if(!Ot(e,y))throw new h(`${m(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(Ot(e,y)){if(!st(e,Hi[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n)}},dh={assert:Io,check:{isHttpStatus(e){return Ot(e,y)},isHttpStatusCategory(e,t){return Ot(e,y)&&st(e,Hi[t])}},assertWrap:{isHttpStatus(e,t){if(!Ot(e,y))throw new h(`${m(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(Ot(e,y)){if(!st(e,Hi[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(Ot(e,y))return e},isHttpStatusCategory(e,t){if(Ot(e,y)&&st(e,Hi[t]))return e}},waitUntil:{isHttpStatus:S(Io.isHttpStatus),isHttpStatusCategory:S(Io.isHttpStatusCategory)}},Ro={instanceOf(e,t,n){if(!(e instanceof t))throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n)}},hh={assert:Ro,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:S(Ro.instanceOf),notInstanceOf:S(Ro.notInstanceOf)}},fy=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ae(e,t){return fy.some(n=>{try{return n(e,t)}catch{return!1}})}const Cn={isKeyOf(e,t,n){if(!ae(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n)},isNotKeyOf(e,t,n){if(ae(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n)},hasKey(e,t,n){if(!ae(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(ae(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!ae(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>ae(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n)}},mh={assert:Cn,check:{isKeyOf(e,t){return ae(t,e)},isNotKeyOf(e,t){return!ae(t,e)},hasKey:ae,lacksKey(e,t){return!ae(e,t)},hasKeys(e,t){return t.every(n=>ae(e,n))},lacksKeys(e,t){return t.every(n=>!ae(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!ae(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(ae(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n);return e},hasKey(e,t,n){if(!ae(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(ae(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!ae(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>ae(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(ae(t,e))return e},isNotKeyOf(e,t){if(!ae(t,e))return e},hasKey(e,t){if(ae(e,t))return e},lacksKey(e,t){if(!ae(e,t))return e},hasKeys(e,t){if(t.every(n=>ae(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!ae(e,n)))return e}},waitUntil:{isKeyOf:S(Cn.isKeyOf),isNotKeyOf:S(Cn.isNotKeyOf),hasKey:S(Cn.hasKey),lacksKey:S(Cn.lacksKey),hasKeys:S(Cn.hasKeys),lacksKeys:S(Cn.lacksKeys)}};function dy(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:ee(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n)}function hy(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:ee(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n)}const Oo={isLengthAtLeast:dy,isLengthExactly:hy},ph={assert:Oo,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ee(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ee(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ee(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n);return e},isLengthExactly:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ee(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ee(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ee(e).length)===t)return e}},waitUntil:{isLengthAtLeast:S(Oo.isLengthAtLeast),isLengthExactly:S(Oo.isLengthExactly)}},Vo={isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new h(`'${m(e)}' is not a nullish.`,t)}},gh={assert:Vo,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new h(`'${m(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:S(Vo.isDefined),isNullish:S(Vo.isNullish)}},Re={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r)}},wh={assert:Re,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:S(Re.isInBounds),isOutBounds:S(Re.isOutBounds),isInteger:S(Re.isInteger),isNotInteger:S(Re.isNotInteger),isAbove:S(Re.isAbove),isAtLeast:S(Re.isAtLeast),isBelow:S(Re.isBelow),isAtMost:S(Re.isAtMost),isNaN:S(Re.isNaN),isFinite:S(Re.isFinite),isInfinite:S(Re.isInfinite),isApproximately:S(Re.isApproximately),isNotApproximately:S(Re.isNotApproximately)}};function my(e,t,n,r,i){return wi(...Is(e,t,n,r,i),!1)}function Is(e,t,n,r,i){const s=Array.isArray(n);return[s?e:lh,s?t:e,s?n:t,s?r:n,s?i:r]}function wi(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${Le(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${Le(a)}`,i)}}function py(e,t,n,r,i){try{const s=wi(...Is(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function gy(e,t,n,r,i){return wi(...Is(e,t,n,r,i),!0)}function wy(e,t,n,r,i){try{const s=wi(...Is(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const _o=Symbol("not set");async function yy(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:lh,u=o?t:e,l=o?n:t,f=o?r:n,c=Xd(o?i:r),d=o?s:i,p=Dt(c.timeout,{milliseconds:!0}).milliseconds,b=Dt(c.interval,{milliseconds:!0});let v=_o,C;async function $(){try{v=await wi(a,u,l,f,void 0,!0)}catch(R){v=_o,C=je(R)}}const M=Date.now();for(;v===_o;)if(await $(),await Jr(b),Date.now()-M>=p)throw di(C,fi(d,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return v}const by={output:my},yh={assert:by,check:{output:py},assertWrap:{output:gy},checkWrap:{output:wy},waitUntil:{output:yy}},Nr={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t)}},bh={assert:Nr,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:S(Nr.isNotPrimitive),isNotPropertyKey:S(Nr.isNotPropertyKey),isPrimitive:S(Nr.isPrimitive),isPropertyKey:S(Nr.isPropertyKey)}},xr={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t)}},Eh={assert:xr,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:S(xr.isPromiseLike,!0),isNotPromiseLike:S(xr.isNotPromiseLike,!0),isPromise:S(xr.isPromise,!0),isNotPromise:S(xr.isNotPromise,!0)}},Uo={matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n)}},vh={assert:Uo,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:S(Uo.matches,!0),mismatches:S(Uo.mismatches,!0)}},pe={isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t)}},Dh={assert:pe,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:S(pe.isArray),isBigInt:S(pe.isBigInt),isBoolean:S(pe.isBoolean),isFunction:S(pe.isFunction),isNull:S(pe.isNull),isNumber:S(pe.isNumber),isObject:S(pe.isObject),isString:S(pe.isString),isSymbol:S(pe.isSymbol),isUndefined:S(pe.isUndefined),isNotArray:S(pe.isNotArray),isNotBigInt:S(pe.isNotBigInt),isNotBoolean:S(pe.isNotBoolean),isNotFunction:S(pe.isNotFunction),isNotNull:S(pe.isNotNull),isNotNumber:S(pe.isNotNumber),isNotObject:S(pe.isNotObject),isNotString:S(pe.isNotString),isNotSymbol:S(pe.isNotSymbol),isNotUndefined:S(pe.isNotUndefined)}};var Ue;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ue||(Ue={}));function su(e,t,n){ou(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n)}function Vl(e,t,n){ou(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${m(e)}' is not an error instance.`},t,n)}function ou(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new h(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Le(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new h(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new h(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new h(t.notInstance,r);else throw new h(t.noError,r)}function _l(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=Le(e);if(typeof t.matchMessage=="string"){if(!n.includes(t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Rs(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=je(u)}try{Vl(i,n,r),e===Ue.Assert?o():e===Ue.Check?o(!0):o(i)}catch(u){e===Ue.CheckWrap?o(void 0):e===Ue.Check?o(!1):a(je(u))}})}catch(s){i=je(s)}try{return Vl(i,n,r),e===Ue.Check?!0:e!==Ue.Assert?i:void 0}catch(s){if(e===Ue.CheckWrap)return;if(e===Ue.Check)return!1;throw s}}function Ey(e,t,n){return Rs(Ue.Assert,e,t,n)}function vy(e,t){return Rs(Ue.Check,e,t)}function Dy(e,t,n){return Rs(Ue.AssertWrap,e,t,n)}function Ay(e,t,n){return Rs(Ue.CheckWrap,e,t,n)}const $y=S(su);function Cy(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${m(s)}'`);return $y(i,async()=>{try{await s();return}catch(u){return je(u)}},a,o)}const ky={throws:Ey,isError:su},Ah={assert:ky,check:{throws:vy,isError(e,t){return _l(e,t)}},assertWrap:{throws:Dy,isError(e,t,n){return ou(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:Ay,isError(e,t){if(_l(e,t))return e}},waitUntil:{throws:Cy,isError:S(su)}},sn=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Wo={isUuid(e,t){if(!String(e).match(sn))throw new h(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(sn))throw new h(`'${String(e)}' is a UUID.`,t)}},$h={assert:Wo,check:{isUuid(e){return!!String(e).match(sn)},isNotUuid(e){return!String(e).match(sn)}},assertWrap:{isUuid(e,t){if(!String(e).match(sn))throw new h(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(sn))throw new h(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(sn))return e},isNotUuid(e){if(!String(e).match(sn))return e}},waitUntil:{isUuid:S(Wo.isUuid),isNotUuid:S(Wo.isNotUuid)}},Sy={...eh.assert,...th.assert,...rh.assert,...nh.assert,...hh.assert,...ih.assert,...mh.assert,...ph.assert,...gh.assert,...wh.assert,...bh.assert,...Eh.assert,...vh.assert,...Dh.assert,...ch.assert,...Ah.assert,...$h.assert,...fh.assert,...dh.assert,...yh.assert},Os=[eh,th,rh,nh,hh,ih,mh,ph,gh,wh,bh,Eh,vh,Dh,ch,Ah,$h,fh,dh,yh],Fy=Object.assign({},...Os.map(e=>e.check)),E=Object.assign(function(t){return!!t},Fy);function Ty(e,t,n){return ns(e,t,n,new Set)}function ns(e,t,n,r){if(e=Ul(e),t=Ul(t),E.isObject(e)&&E.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!ns(ee(e).sort(),ee(t).sort(),n,r))return!1;let i=!1;const s=ee(e).map(o=>{const a=ns(e[o],t[o],n,r);return E.isPromise(a)&&(i=!0),a});return Wl(i,s)}else if(E.isArray(e)&&E.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=ns(o,t[a],n,r);return E.isPromise(u)&&(i=!0),u});return Wl(i,s)}else return n(e,t)}function Ul(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Wl(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(E.isTrue))}catch(i){r(je(i))}}):t.every(E.isTrue)}const My=Object.assign({},...Os.map(e=>e.assertWrap)),Ny=Object.assign(function(t,n){if(!t)throw new h("Assertion failed.",n);return t},My);function xy(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const Py={tsType:xy},By={assert:Py},Ly={fail:e=>{throw new h("Failure triggered.",e)}},Iy={...By.assert,...Sy,...Ly},Cr=Object.assign(function(t,n){if(!t)throw new h("Assertion failed.",n)},Iy),Ry=Object.assign({},...Os.map(e=>e.checkWrap));Object.assign(function(t){if(t)return t},Ry);const Oy=Object.assign({},...Os.map(e=>e.waitUntil));Object.assign(function(t,n){return Qd((r,i)=>{if(!r)throw new h("Assertion failed.",i)},[t,n],!1)},Oy);function Vy(e,t){return E.hasKey(e,"entryType")&&e.entryType===t}function jn(e,t){return e.controlType===t}var X=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(X||{});const Ch=Symbol("any-type"),_y={checkbox:!1,color:"",dropdown:"",hidden:Ch,number:0,text:""};function Uy(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const s=_y[i.controlType];s!==Ch&&(typeof s!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function Wy(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return E.isPromise(i)?new Promise(async(s,o)=>{try{const a=await i;e.set(r,a),s(a)}catch(a){o(je(a))}}):(e.set(r,i),i)}}function kh(e,t,n){if(t in e)return e[t];{const r=n();return E.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(je(o))}}):(e[t]=r,r)}}function au(e){return ee(e).map(t=>[t,e[t]])}function Da(e){return Object.fromEntries(e)}function Vs(e,t,n){return e.reduce((r,i,s,o)=>{const a=t(i,s,o);return n(a,i,s,o)&&r.push(a),r},[])}function qy(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}function jy({min:e,max:t}){const{min:n,max:r}=Gf({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((f,c,d)=>f+c*256**d,0);while(l>=a);return n+l%i}const ql=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];function Sh(e=16){let t="";for(let n=0;n<e;n++){const r=jy({min:0,max:ql.length-1});t+=ql[r]}return t}function Fh(e){if(E.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Le(t).trim()).join(`
`))}var jl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(jl||(jl={}));function Th(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const zy="modulepreload",Gy=function(e){return"/element-vir/vira/"+e},zl={},Mh=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(n.map(u=>{if(u=Gy(u),u in zl)return;zl[u]=!0;const l=u.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":zy,l||(c.as="script"),c.crossOrigin="",c.href=u,a&&c.setAttribute("nonce",a),document.head.appendChild(c),l)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var De;(function(e){e.Standard="stdout",e.Error="stderr"})(De||(De={}));var K;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(K||(K={}));async function Ky(){return await Hd({async[Zt.Node](){const e=(await Mh(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[K.Bold]:e.bold.open,[K.Debug]:e.blueBright.open,[K.Error]:e.red.open,[K.Faint]:e.gray.open,[K.Info]:e.cyan.open,[K.Mutate]:e.magenta.open,[K.NormalWeight]:"\x1B[22m",[K.Plain]:"",[K.Reset]:e.reset.open,[K.Success]:e.green.open,[K.Warning]:e.yellow.open}},[Zt.Web](){return Promise.resolve({[K.Bold]:"font-weight: bold",[K.Debug]:"color: blue",[K.Error]:"color: red",[K.Faint]:"color: grey",[K.Info]:"color: teal",[K.Mutate]:"color: magenta",[K.NormalWeight]:"",[K.Plain]:"",[K.Reset]:"",[K.Success]:"color: green",[K.Warning]:"color: orange"})}})}const Ze=await Ky(),Zy={[K.Bold]:{colors:[Ze.bold],logType:De.Standard},[K.Debug]:{colors:[Ze.debug],logType:De.Standard},[K.Faint]:{colors:[Ze.faint],logType:De.Standard},[K.Info]:{colors:[Ze.info],logType:De.Standard},[K.Mutate]:{colors:[Ze.mutate,Ze.bold],logType:De.Standard},[K.NormalWeight]:{colors:[Ze.normalWeight],logType:De.Standard},[K.Plain]:{colors:[],logType:De.Standard},[K.Reset]:{colors:[Ze.reset],logType:De.Standard},[K.Success]:{colors:[Ze.success,Ze.bold],logType:De.Standard},[K.Error]:{colors:[Ze.error,Ze.bold],logType:De.Error},[K.Warning]:{colors:[Ze.warning],logType:De.Error}};function Yy(e){return e.replace(/,/g,"")}function Jy(e){return typeof e=="number"?e:Number(typeof e=="string"?Yy(e):e)}function Gl(e){const t=Hy(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function Hy(e){const t=Jy(e);if(!isNaN(t))return t}const Qy="px";function Nh(e){return Xy({value:e,suffix:Qy})}function Xy({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function e1({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function t1(){return await Hd({async[Zt.Node](){const{inspect:e}=await Mh(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[K.Reset].colors.join("")].join(""),css:void 0}}},[Zt.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:Vs(n.colorConfig[t].colors,o=>e1({value:o,suffix:";"}),E.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:m(o)).join(`
`),n.omitColors?"":n.colorConfig[K.Reset].colors.join("")].join(""),css:r}}}})}const n1=await t1();function et({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function sr({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function r1(e,t){try{let n=!1;const r=au(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(n=!0,o):o?[o.key,o.value]:void 0}).filter(E.isTruthy);return n?new Promise(async(i,s)=>{try{const o=Vs(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},E.isTruthy);i(Da(o))}catch(o){s(je(o))}}):Da(r)}catch(n){throw je(n)}}function i1(e,t){return r1(e,(n,r)=>{const i=r,s=t(r,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function xh(e,...t){const n={...e};return t.forEach(r=>{r&&au(r).forEach(([i,s])=>{s!=null&&(n[i]=s)})}),n}const s1={colorConfig:Zy,omitColors:!1},o1=Ph({[De.Error](){},[De.Standard](){}});function Ph(e,t){const n=xh(s1,t);function r(s){e[n.colorConfig[s.colorKey].logType](n1({...s,options:n}))}const i=i1(K,s=>(...o)=>r({args:o,colorKey:s}));return{...i,if(s){return s?i:o1}}}const a1=Xw(Zt.Node)?{[De.Error]({text:e}){process.stderr.write(e+`
`)},[De.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[De.Error]({text:e,css:t}){console.error(et({value:e,prefix:"%c"}),t)},[De.Standard]({text:e,css:t}){console.log(et({value:e,prefix:"%c"}),t)}};Ph(a1);function Bh(...e){const t=e.join(""),n=qy(Array.from(t));return Array.from(n).join("")}function u1(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Lh(e,t){const n=Bh([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return l1(e,n)}function l1(e,t){const n=Bh(t);return typeof e=="string"?new RegExp(u1(e),n):new RegExp(e.source,n)}function Ih(e,{caseSensitive:t}){return Lh(e,"")}function c1({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=Lh(Ih(t,{caseSensitive:n}),"g"),s=[];return e.replace(i,(...o)=>{const a=o[o.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=o[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);s.push({index:a,length:u.length});const l=o[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),s}function f1(e,t,{caseSensitive:n}){const r=c1({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=Ih(t,{caseSensitive:n});return e.split(i).reduce((o,a,u)=>{const l=r[u],f=o.concat(a);if(l){const c=e.slice(l.index,l.index+l.length);return f.concat(c)}else return f},[])}function d1(e,t){return e.split(t)}function qo(e,t){const{min:n,max:r}=Gf(t);return e>r?n:e<n?r:e}function ke(e,t){let n=!1;const r=ee(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),i[s]=o,i},{});return n?new Promise(async(i,s)=>{try{await Promise.all(ee(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(je(o))}}):r}function _s(e,t){const n=au(e).filter(([r,i])=>t(r,i,e));return Da(n)}function h1(e,t){return _s(e,n=>!t.includes(n))}function m1(e,t){return _s(e,n=>t.includes(n))}function Rh(e){return ee(e).map(t=>e[t])}function p1(e,t){return t.capitalizeFirstLetter?g1(e):e}function g1(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const w1={capitalizeFirstLetter:!1};var fr;(function(e){e.Upper="upper",e.Lower="lower"})(fr||(fr={}));function y1(e){return e.toLowerCase()!==e.toUpperCase()}function Kl(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(y1(r)){if(t===fr.Upper&&r!==r.toUpperCase()||t===fr.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function b1(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return p1(r,xh(w1,t))}function E1(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=Kl(o,fr.Lower,{rejectNoCaseCharacters:!0})||Kl(a,fr.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function v1(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function D1(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function Oh(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function Vh(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}function Us(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function A1(e){return Us(e).filter(t=>isNaN(Number(t)))}function _h(e){return A1(e).map(n=>e[n])}function L(e){try{return zf.stringify(e)}catch{return String(e)}}const $1=[".",":",";",",","?","!"],C1=new RegExp(`[${$1.join("")}]+$`);function Zl(e){return e.replace(C1,"")}function dr(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:L(e):""}function uu(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&Zl(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:Zl(r)).join(": "):""}function Gt(e){return e instanceof Error?e:new Error(dr(e))}function Uh(e,t){const n=Gt(e);return n.message=uu(t,n.message),n}var P;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(P||(P={}));var Tn;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Tn||(Tn={}));const k1={[Tn.Information]:[P.Continue,P.SwitchingProtocols,P.Processing,P.EarlyHints],[Tn.Success]:[P.Ok,P.Created,P.Accepted,P.NonAuthoritativeInformation,P.NoContent,P.ResetContent,P.PartialContent,P.MultiStatus,P.AlreadyReported,P.ImUsed],[Tn.Redirect]:[P.MultipleChoices,P.MovedPermanently,P.Found,P.SeeOther,P.NotModified,P.UseProxy,P.Unused,P.TemporaryRedirect,P.PermanentRedirect],[Tn.ClientError]:[P.BadRequest,P.Unauthorized,P.PaymentRequired,P.Forbidden,P.NotFound,P.MethodNotAllowed,P.NotAcceptable,P.ProxyAuthenticationRequired,P.RequestTimeout,P.Conflict,P.Gone,P.LengthRequired,P.PreconditionFailed,P.PayloadTooLarge,P.UriTooLong,P.UnsupportedMediaType,P.RangeNotSatisfiable,P.ExpectationFailed,P.ImATeapot,P.MisdirectedRequest,P.UnprocessableContent,P.Locked,P.FailedDependency,P.TooEarly,P.UpgradeRequired,P.PreconditionRequired,P.TooManyRequests,P.RequestHeaderFieldsTooLarge,P.UnavailableForLegalReasons],[Tn.ServerError]:[P.InternalServerError,P.NotImplemented,P.BadGateway,P.ServiceUnavailable,P.GatewayTimeout,P.HttpVersionNotSupported,P.VariantAlsoNegotiates,P.InsufficientStorage,P.LoopDetected,P.NotExtended,P.NetworkAuthenticationRequired]};class S1{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Gt(r))}})}}function Wh(e){const t=new S1,n=Dt(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var ps;(function(e){e.Node="node",e.Web="web"})(ps||(ps={}));function F1(){return Yd?ps.Node:ps.Web}F1();class F extends Error{name="AssertionError";constructor(t,n){super(uu(n,t)||"Assertion failed.")}}const w=Symbol("auto guard");function g(){return w}function Ws(e,t,n){return t in e&&e[t]!==w?e[t]:n()}function T1(e,t){Tt(e,"array",t)}function M1(e,t){Tt(e,"bigint",t)}function N1(e,t){Tt(e,"boolean",t)}function x1(e,t){Tt(e,"function",t)}function P1(e,t){Tt(e,"number",t)}function B1(e,t){Tt(e,"object",t)}function L1(e,t){Tt(e,"string",t)}function I1(e,t){Tt(e,"symbol",t)}function R1(e,t){Tt(e,"undefined",t)}function O1(e,t){Tt(e,"null",t)}function V1(e,t){Ft(e,"array",t)}function _1(e,t){Ft(e,"bigint",t)}function U1(e,t){Ft(e,"boolean",t)}function W1(e,t){Ft(e,"function",t)}function qh(e,t){if(Ft(e,"number",t),isNaN(e))throw new F("Value is NaN.",t)}function q1(e,t){Ft(e,"object",t)}function j1(e,t){Ft(e,"string",t)}function z1(e,t){Ft(e,"symbol",t)}function G1(e,t){Ft(e,"undefined",t)}function K1(e,t){Ft(e,"null",t)}const Z1={isArray:V1,isBigInt:_1,isBoolean:U1,isFunction:W1,isNull:K1,isNumber:qh,isObject:q1,isString:j1,isSymbol:z1,isUndefined:G1,isNotArray:T1,isNotBigInt:M1,isNotBoolean:N1,isNotFunction:x1,isNotNull:O1,isNotNumber:P1,isNotObject:B1,isNotString:L1,isNotSymbol:I1,isNotUndefined:R1},jh={assert:Z1,check:{isArray:g(),isBigInt:w,isBoolean:w,isFunction:g(),isNull:w,isNumber:w,isObject:w,isString:w,isSymbol:w,isUndefined:w,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()},assertWrap:{isArray:g(),isBigInt:w,isBoolean:w,isFunction:g(),isNull:w,isNumber:w,isObject:w,isString:w,isSymbol:g(),isUndefined:w,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()},checkWrap:{isArray:g(),isBigInt:w,isBoolean:w,isFunction:g(),isNull:w,isNumber:w,isObject:w,isString:w,isSymbol:w,isUndefined:void 0,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:void 0},waitUntil:{isArray:g(),isBigInt:w,isBoolean:w,isFunction:g(),isNull:w,isNumber:w,isObject:w,isString:w,isSymbol:w,isUndefined:w,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()}};var gs;(function(e){e.String="string",e.Number="number",e.Bigint="bigint",e.Boolean="boolean",e.Symbol="symbol",e.Undefined="undefined",e.Object="object",e.Function="function",e.Array="array",e.Null="null"})(gs||(gs={}));function zh(e){return e===null?gs.Null:Array.isArray(e)?gs.Array:typeof e}function Ft(e,t,n){const r=zh(e);if(r!==t)throw new F(`'${L(e)}' is '${r}', not '${t}'.`,n)}function Tt(e,t,n){const r=zh(e);if(r===t)throw new F(`'${L(e)}' is '${r}'.`,n)}function Y1(e,t){if(e)throw new F(`'${L(e)}' is not truthy.`,t)}function J1(e,t){if(!e)throw new F(`'${L(e)}' is not truthy.`,t)}function H1(e,t){if(e!==!0)throw new F(`'${L(e)}' is not true.`,t)}function Q1(e,t){if(e!==!1)throw new F(`'${L(e)}' is not false.`,t)}const X1={isFalse:Q1,isFalsy:Y1,isTrue:H1,isTruthy:J1},Gh={assert:X1,check:{isFalse:w,isFalsy:w,isTrue:w,isTruthy:g()},assertWrap:{isFalse:w,isFalsy:g(),isTrue:w,isTruthy:g()},checkWrap:{isFalse:w,isFalsy:g(),isTrue:w,isTruthy:g()},waitUntil:{isFalse:w,isFalsy:g(),isTrue:w,isTruthy:g()}};function e2(e,t,n){const r=`${L(e)} does not end with ${L(t)}}`;if(typeof e=="string"){if(!e.endsWith(t))throw new F(r,n)}else if(e[e.length-1]!==t)throw new F(r,n)}function t2(e,t,n){const r=`${L(e)} ends with ${L(t)}}`;if(typeof e=="string"){if(e.endsWith(t))throw new F(r,n)}else if(e[e.length-1]===t)throw new F(r,n)}function n2(e,t,n){const r=`${L(e)} does not start with ${L(t)}}`;if(typeof e=="string"){if(!e.startsWith(t))throw new F(r,n)}else if(e[0]!==t)throw new F(r,n)}function r2(e,t,n){const r=`${L(e)} starts with ${L(t)}}`;if(typeof e=="string"){if(e.startsWith(t))throw new F(r,n)}else if(e[0]===t)throw new F(r,n)}const i2={endsWith:e2,endsWithout:t2,startsWith:n2,startsWithout:r2},Kh={assert:i2,check:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},assertWrap:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},checkWrap:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},waitUntil:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()}};function qs(e,t,n){const r=_h(t);if(!r.includes(e))throw new F(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function s2(e,t,n){try{qs(e,t)}catch{return}const r=_h(t);throw new F(`${String(e)} is an enum value in '${r.join(",")}'`,n)}const o2={isEnumValue:qs,isNotEnumValue:s2},Zh={assert:o2,check:{isEnumValue:g(),isNotEnumValue:g()},assertWrap:{isEnumValue:g(),isNotEnumValue:g()},checkWrap:{isEnumValue:g(),isNotEnumValue:g()},waitUntil:{isEnumValue:g(),isNotEnumValue:g()}};function Yh(e,t,n){if(e!==t)throw new F(`

${L(e)}

does not strictly equal

${L(t)}

`,n)}function a2(e,t,n){if(e===t)throw new F(`

${L(e)}

strictly equals

${L(t)}

`,n)}function u2(e,t,n){if(e!=t)throw new F(`

${L(e)}

does not loosely equal

${L(t)}

`,n)}function l2(e,t,n){if(e==t)throw new F(`

${L(e)}

loosely equals

${L(t)}

`,n)}function lu(e,t,n){if(!Je(e,t))throw new F(`

${L(e)}

does not deeply equal

${L(t)}

`,n)}function c2(e,t,n){if(Je(e,t))throw new F(`

${L(e)}

deeply equals

${L(t)}

`,n)}const f2={strictEquals:Yh,notStrictEquals:a2,looseEquals:u2,notLooseEquals:l2,deepEquals:lu,notDeepEquals:c2},Jh={assert:f2,check:{strictEquals:g(),notStrictEquals:w,looseEquals:w,notLooseEquals:w,deepEquals:g(),notDeepEquals:w},assertWrap:{strictEquals:g(),notStrictEquals:w,looseEquals:w,notLooseEquals:w,deepEquals:g(),notDeepEquals:w},checkWrap:{strictEquals:g(),notStrictEquals:w,looseEquals:w,notLooseEquals:w,deepEquals:g(),notDeepEquals:w},waitUntil:{strictEquals:g(),notStrictEquals:w,looseEquals:w,notLooseEquals:w,deepEquals:g(),notDeepEquals:w}};function Hh(e,t,n){if(!e||typeof e!="object")throw new F(`${L(e)} is not an object.`,n);if(!t||typeof t!="object")throw new F(`${L(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];try{Yh(s,o)}catch{throw new F(`Entries are not equal at key '${String(i)}'.`,n)}})}function d2(e,t,n){try{Hh(e,t)}catch{return}throw new F("Entries are equal.",n)}const h2={entriesEqual:Hh,notEntriesEqual:d2},Qh={assert:h2,check:{entriesEqual:g(),notEntriesEqual:w},assertWrap:{entriesEqual:g(),notEntriesEqual:w},checkWrap:{entriesEqual:g(),notEntriesEqual:w},waitUntil:{entriesEqual:g(),notEntriesEqual:w}};function Yl(e,t){return JSON.stringify(e)===JSON.stringify(t)}function cu(e,t,n){try{p2(e,t)}catch(r){throw new F(dr(r),n)}}function m2(e,t,n){try{cu(e,t)}catch{return}throw new F("Values are JSON equal.",n)}function p2(e,t){const n=Yl(e,t);if(!(e===t||n)){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),i=Object.keys(t).sort();if(r.length||i.length){if(!Yl(r,i))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{cu(e[o],t[o])}catch(a){throw new Error(`JSON objects are not equal at key '${o}': ${dr(a)}`)}})}}throw new Error("Values are not JSON equal.")}}const g2={jsonEquals:cu,notJsonEquals:m2},Xh={assert:g2,check:{jsonEquals:g(),notJsonEquals:w},assertWrap:{jsonEquals:g(),notJsonEquals:w},checkWrap:{jsonEquals:g(),notJsonEquals:w},waitUntil:{jsonEquals:g(),notJsonEquals:w}};function js(e,t,n){try{if(!Reflect.ownKeys(e).map(i=>e[i]).includes(t))throw new Error("fail")}catch{throw new F(`'${L(e)}' does not have value '${L(t)}'.`,n)}}function e0(e,t,n){try{js(e,t)}catch{return}throw new F(`'${L(e)}' has value '${L(t)}'.`,n)}function w2(e,t,n){t.forEach(r=>js(e,r,n))}function y2(e,t,n){t.forEach(r=>e0(e,r,n))}function fu(e,t,n){if(typeof t=="string"){if(!t.includes(e))throw new F(`${L(e)} is not in '${t}'.`,n)}else js(t,e,n)}function b2(e,t,n){try{fu(e,t)}catch{return}throw new F(`${L(e)} is not in ${L(t)}.`,n)}function t0(e,t){const n=e;if(n){if(typeof n!="string"&&typeof n!="object")throw new TypeError(`Cannot check if '${L(n)}' is empty.`);if(typeof n=="string"&&n||Array.isArray(n)&&n.length||n instanceof Map&&n.size||n instanceof Set&&n.size||n&&typeof n=="object"&&Object.keys(n).length)throw new F(`'${L(e)}' is not empty.`,t)}else return}function E2(e,t){try{t0(e)}catch{return}throw new F(`'${L(e)}' is empty.`,t)}const v2={hasValue:js,lacksValue:e0,hasValues:w2,lacksValues:y2,isIn:fu,isNotIn:b2,isEmpty:t0,isNotEmpty:E2},n0={assert:v2,check:{hasValue:w,lacksValue:w,hasValues:w,lacksValues:w,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},assertWrap:{hasValue:w,lacksValue:w,hasValues:w,lacksValues:w,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},checkWrap:{hasValue:w,lacksValue:w,hasValues:w,lacksValues:w,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},waitUntil:{hasValue:w,lacksValue:w,hasValues:w,lacksValues:w,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()}};function D2(e,t){try{qs(e,P)}catch{throw new F(`${L(e)} is not a valid http status.`,t)}}function A2(e,t,n){try{qs(e,P),fu(e,k1[t])}catch{throw new F(`${L(e)} is not a '${t}' http status.`,n)}}const $2={isHttpStatus:D2,isHttpStatusCategory:A2},r0={assert:$2,check:{isHttpStatus:w,isHttpStatusCategory:g()},assertWrap:{isHttpStatus:w,isHttpStatusCategory:g()},checkWrap:{isHttpStatus:w,isHttpStatusCategory:g()},waitUntil:{isHttpStatus:w,isHttpStatusCategory:g()}};function C2(e,t,n){if(!(e instanceof t))throw new F(`'${L(e)}' is not an instance of '${t.name}'`,n)}function k2(e,t,n){if(e instanceof t)throw new F(`'${L(e)}' is an instance of '${t.name}'`,n)}const S2={instanceOf:C2,notInstanceOf:k2},i0={assert:S2,check:{instanceOf:g(),notInstanceOf:g()},assertWrap:{instanceOf:g(),notInstanceOf:g()},checkWrap:{instanceOf:g(),notInstanceOf:g()},waitUntil:{instanceOf:g(),notInstanceOf:g()}};function F2(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Ws(t,i,()=>s0(s)),r),{})}function s0(e){return(...t)=>T2(e,...t)}function T2(e,t,...n){try{return e(t,...n),!0}catch{return!1}}function o0(e,t,n){try{zs(t,e)}catch{throw new F(`'${String(e)}' is not a key of '${L(t)}'.`,n)}}function M2(e,t,n){try{o0(e,t)}catch{return}throw new F(`'${String(e)}' is a key of '${L(t)}'.`,n)}const N2=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function zs(e,t,n){const r=`'${L(e)}' does not have key '${String(t)}'.`;if(!N2.some(s=>{try{return s(e,t)}catch{return!1}}))throw new F(r,n)}function x2(e,t,n){try{zs(e,t)}catch{return}throw new F(`'${L(e)}' has key '${String(t)}'.`,n)}const a0=s0(zs);function P2(e,t,n){const r=t.filter(i=>!a0(e,i));if(r.length)throw new F(`'${L(e)}' does not have keys '${r.join(",")}'.`,n)}function B2(e,t,n){const r=t.filter(i=>a0(e,i));if(r.length)throw new F(`'${L(e)}' does not lack keys '${r.join(",")}'.`,n)}const L2={isKeyOf:o0,isNotKeyOf:M2,hasKey:zs,lacksKey:x2,hasKeys:P2,lacksKeys:B2},u0={assert:L2,check:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},assertWrap:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},checkWrap:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},waitUntil:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()}};function I2(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Us(e).length)<t)throw new F(`Length '${e.length}' is not at least '${t}'.`,n)}function R2(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Us(e).length)!==t)throw new F(`Length '${e.length}' is not exactly '${t}'.`,n)}const O2={isLengthAtLeast:I2,isLengthExactly:R2},l0={assert:O2,check:{isLengthAtLeast:g(),isLengthExactly:g()},assertWrap:{isLengthAtLeast:g(),isLengthExactly:g()},checkWrap:{isLengthAtLeast:g(),isLengthExactly:g()},waitUntil:{isLengthAtLeast:g(),isLengthExactly:g()}};function V2(e,t){if(e==null)throw new F(`'${L(e)}' is not defined.`,t)}function _2(e,t){if(e!=null)throw new F(`'${L(e)}' is not a nullish.`,t)}const U2={isDefined:V2,isNullish:_2},c0={assert:U2,check:{isDefined:g(),isNullish:w},assertWrap:{isDefined:g(),isNullish:w},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:g(),isNullish:w}};function W2(e,t,n){if(e<=t)throw new F(`${e} is not above ${t}`,n)}function q2(e,t,n){if(e<t)throw new F(`${e} is not at least ${t}`,n)}function j2(e,{max:t,min:n},r){if(e<n||t<e)throw new F(`${e} is not within the bounds ${L({min:n,max:t})}`,r)}function z2(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new F(`${e} is not outside the bounds ${L({min:t,max:n})}`,r)}function G2(e,t){if(qh(e),!Number.isInteger(e))throw new F(`${e} is not an integer.`,t)}function K2(e,t){if(Number.isInteger(e))throw new F(`${e} is an integer.`,t)}function Z2(e,t,n){if(e>=t)throw new F(`${e} is not below ${t}`,n)}function Y2(e,t,n){if(e>t)throw new F(`${e} is not at most ${t}`,n)}function J2(e,t){if(!isNaN(e))throw new F(`${e} is not NaN`,t)}function H2(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new F(`${e} is not finite`,t)}function Q2(e,t){if(e!==1/0&&e!==-1/0)throw new F(`${e} is not infinite`,t)}function X2(e,t,n,r){if(e<t-n||e>t+n)throw new F(`${e} is not within ±${n} of ${t}`,r)}function eb(e,t,n,r){if(e>=t-n&&e<=t+n)throw new F(`${e} is within ±${n} of ${t}`,r)}const tb={isInBounds:j2,isOutBounds:z2,isInteger:G2,isNotInteger:K2,isAbove:W2,isAtLeast:q2,isBelow:Z2,isAtMost:Y2,isNaN:J2,isFinite:H2,isInfinite:Q2,isApproximately:X2,isNotApproximately:eb},f0={assert:tb,check:{isInBounds:w,isOutBounds:w,isInteger:w,isNotInteger:w,isAbove:w,isAtLeast:w,isBelow:w,isAtMost:w,isNaN:w,isFinite:w,isInfinite:w,isApproximately:w,isNotApproximately:w},assertWrap:{isInBounds:w,isOutBounds:w,isInteger:w,isNotInteger:w,isAbove:w,isAtLeast:w,isBelow:w,isAtMost:w,isNaN:w,isFinite:w,isInfinite:w,isApproximately:w,isNotApproximately:w},checkWrap:{isInBounds:w,isOutBounds:w,isInteger:w,isNotInteger:w,isAbove:w,isAtLeast:w,isBelow:w,isAtMost:w,isNaN:w,isFinite:w,isInfinite:w,isApproximately:w,isNotApproximately:w},waitUntil:{isInBounds:w,isOutBounds:w,isInteger:w,isNotInteger:w,isAbove:w,isAtLeast:w,isBelow:w,isAtMost:w,isNaN:w,isFinite:w,isInfinite:w,isApproximately:w,isNotApproximately:w}},Jl={interval:{milliseconds:100},timeout:{seconds:10}},jo=Symbol("not set");async function d0(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=rb(t),a=Dt(o.timeout,{milliseconds:!0}).milliseconds,u=Dt(o.interval,{milliseconds:!0});let l=jo,f;async function c(){try{l=n?r():await r(),e(l,...i)}catch(p){l=jo,f=Gt(p)}}const d=Date.now();for(;l===jo;)if(await c(),await Wh(u),Date.now()-d>=a){const b=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Uh(f,b)}return l}function nb(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Ws(t,i,()=>tr(s)),r),{})}function tr(e,t=!1){return(...n)=>d0(e,n,t)}function rb(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:h0(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function h0(e){return{interval:e?.interval||Jl.interval,timeout:e?.timeout||Jl.timeout}}function ib(e,t,n,r,i){return yi(...Gs(e,t,n,r,i),!1)}function Gs(e,t,n,r,i){const s=Array.isArray(n);return[s?e:lu,s?t:e,s?n:t,s?r:n,s?i:r]}function yi(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new F(`Output from '${t.name}' did not produce expected output with input: ${L(n)}: ${dr(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new F(`Output from '${t.name}' did not produce expected output with input: ${L(n)}: ${dr(a)}`,i)}}function sb(e,t,n,r,i){try{const s=yi(...Gs(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function ob(e,t,n,r,i){return yi(...Gs(e,t,n,r,i),!0)}function ab(e,t,n,r,i){try{const s=yi(...Gs(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const zo=Symbol("not set");async function ub(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:lu,u=o?t:e,l=o?n:t,f=o?r:n,c=h0(o?i:r),d=o?s:i,p=Dt(c.timeout,{milliseconds:!0}).milliseconds,b=Dt(c.interval,{milliseconds:!0});let v=zo,C;async function $(){try{v=await yi(a,u,l,f,void 0,!0)}catch(R){v=zo,C=Gt(R)}}const M=Date.now();for(;v===zo;)if(await $(),await Wh(b),Date.now()-M>=p)throw Uh(C,uu(d,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return v}const lb={output:ib},m0={assert:lb,check:{output:sb},assertWrap:{output:ob},checkWrap:{output:ab},waitUntil:{output:ub}};function p0(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new F(`'${L(e)}' is not a Primitive.`,t)}function cb(e,t){try{p0(e)}catch{return}throw new F(`'${L(e)}' is a Primitive.`,t)}function g0(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new F(`'${L(e)}' is not a PropertyKey.`,t)}function fb(e,t){try{g0(e)}catch{return}throw new F(`'${L(e)}' is a PropertyKey.`,t)}const db={isPropertyKey:g0,isNotPropertyKey:fb,isPrimitive:p0,isNotPrimitive:cb},w0={assert:db,check:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:w,isPropertyKey:w},assertWrap:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:w,isPropertyKey:w},checkWrap:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:w,isPropertyKey:w},waitUntil:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:w,isPropertyKey:w}};function du(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new F(`'${L(e)}' is not a PromiseLike.`,t)}function y0(e,t){try{du(e)}catch{return}throw new F(`'${L(e)}' is a PromiseLike.`,t)}function b0(e,t){if(!(e instanceof Promise))throw new F(`'${L(e)}' is not a Promise.`,t)}function E0(e,t){if(e instanceof Promise)throw new F(`'${L(e)}' is a Promise.`,t)}const hb={isPromiseLike:du,isNotPromiseLike:y0,isPromise:b0,isNotPromise:E0},v0={assert:hb,check:{isPromiseLike:w,isNotPromiseLike:g(),isPromise:w,isNotPromise:g()},assertWrap:{isPromiseLike:g(),isNotPromiseLike:g(),isPromise:g(),isNotPromise:g()},checkWrap:{isNotPromise:g(),isNotPromiseLike:g(),isPromise:w,isPromiseLike:w},waitUntil:{isPromiseLike:tr(du,!0),isNotPromiseLike:tr(y0,!0),isPromise:tr(b0,!0),isNotPromise:tr(E0,!0)}};function mb(e,t,n){if(!t.test(e))throw new F(`'${e}' does not match ${t}`,n)}function pb(e,t,n){if(t.test(e))throw new F(`'${e}' matches ${t}`,n)}const gb={matches:mb,mismatches:pb},D0={assert:gb,check:{matches:w,mismatches:w},assertWrap:{matches:w,mismatches:w},checkWrap:{matches:w,mismatches:w},waitUntil:{matches:w,mismatches:w}};var We;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(We||(We={}));function A0(e,t,n){$0(e,{noError:"No error.",notInstance:`'${L(e)}' is not an error instance.`},t,n)}function Hl(e,t,n){$0(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${L(e)}' is not an error instance.`},t,n)}function $0(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new F(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=dr(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new F(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new F(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new F(t.notInstance,r);else throw new F(t.noError,r)}function Ks(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Gt(u)}try{Hl(i,n,r),e===We.Assert?o():e===We.Check?o(!0):o(i)}catch(u){e===We.CheckWrap?o(void 0):e===We.Check?o(!1):a(Gt(u))}})}catch(s){i=Gt(s)}try{return Hl(i,n,r),e===We.Check?!0:e!==We.Assert?i:void 0}catch(s){if(e===We.CheckWrap)return;if(e===We.Check)return!1;throw s}}function wb(e,t,n){return Ks(We.Assert,e,t,n)}function yb(e,t){return Ks(We.Check,e,t)}function bb(e,t,n){return Ks(We.AssertWrap,e,t,n)}function Eb(e,t,n){return Ks(We.CheckWrap,e,t,n)}const vb=tr(A0);function Db(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${L(s)}'`);return vb(i,async()=>{try{await s();return}catch(u){return Gt(u)}},a,o)}const Ab={throws:wb,isError:A0},C0={assert:Ab,check:{throws:yb,isError:w},assertWrap:{throws:bb,isError:w},checkWrap:{throws:Eb,isError:w},waitUntil:{throws:Db,isError:w}},k0=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function $b(e,t){if(!String(e).match(k0))throw new F(`'${String(e)}' is not a UUID.`,t)}function Cb(e,t){if(String(e).match(k0))throw new F(`'${String(e)}' is a UUID.`,t)}const kb={isUuid:$b,isNotUuid:Cb},S0={assert:kb,check:{isUuid:w,isNotUuid:g()},assertWrap:{isUuid:w,isNotUuid:g()},checkWrap:{isUuid:w,isNotUuid:g()},waitUntil:{isUuid:w,isNotUuid:g()}},bi={...Gh.assert,...Kh.assert,...Qh.assert,...Zh.assert,...i0.assert,...Xh.assert,...u0.assert,...l0.assert,...c0.assert,...f0.assert,...w0.assert,...v0.assert,...D0.assert,...jh.assert,...Jh.assert,...C0.assert,...S0.assert,...n0.assert,...r0.assert,...m0.assert},Zs=[Gh,Kh,Qh,Zh,i0,Xh,u0,l0,c0,f0,w0,v0,D0,jh,Jh,C0,S0,n0,r0,m0],Sb=Object.assign({},...Zs.map(e=>e.check)),Fb=Object.assign({},...Zs.map(e=>e.assertWrap)),Tb=Object.assign({},...Zs.map(e=>e.checkWrap)),Mb=Object.assign({},...Zs.map(e=>e.waitUntil)),Nb=F2(bi,Sb),Aa=Object.assign(function(t){return!!t},Nb);function xb(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Ws(t,i,()=>Pb(s)),r),{})}function Pb(e){return(...t)=>(e(...t),t[0])}const Bb=xb(bi,Fb);Object.assign(function(t,n){if(!t)throw new F("Assertion failed.",n);return t},Bb);function Lb(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const Ib={tsType:Lb},Rb={assert:Ib},Ob={fail:e=>{throw new F("Failure triggered.",e)}},Vb={...Rb.assert,...bi,...Ob};Object.assign(function(t,n){if(!t)throw new F("Assertion failed.",n)},Vb);function _b(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Ws(t,i,()=>Ub(s)),r),{})}function Ub(e){return(...t)=>{try{return e(...t),t[0]}catch{return}}}const Wb=_b(bi,Tb);Object.assign(function(t){if(t)return t},Wb);const qb=nb(bi,Mb);Object.assign(function(t,n){return d0((r,i)=>{if(!r)throw new F("Assertion failed.",i)},[t,n],!1)},qb);function jb(e,t,n){if(t in e)return e[t];{const r=n();return Aa.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(Gt(o))}}):(e[t]=r,r)}}function Ql(e){return Us(e).map(t=>e[t])}class zb{listeners={};getListenerCount(){return Ql(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)}listen(t,n,r={}){const i=this.listeners,s=Aa.isString(t)?t:t.type;function o(){return i[s]?.delete(n)||!1}function a(u,l){r.once&&o(),n(u,l)}return jb(i,s,()=>new Map).set(n,{listener:a,removeListener:o}),o}removeListener(t,n){const r=Aa.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const s=i.get(n);return s?s.removeListener():!1}dispatch(t){const n=this.listeners[t.type],r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),r}removeAllListeners(){const n=Ql(this.listeners).reduce((r,i)=>{const s=i.size||0;return i.clear(),r+s},0);return this.listeners={},n}destroy(){this.removeAllListeners()}}class F0 extends zb{}function T0(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Xl(e,t,n){return T0(globalThis,e,t,n)}function hu(e,t){return ws(e.title),e.parent?[...hu(e.parent),ws(e.parent.title)].concat([]):[]}function ws(e){return D1(e).toLowerCase().replaceAll(/\s/g,"-")}function Gb({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const Kb={[Me.ElementExample]:()=>[],[Me.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Uy(e.controls,e.title)].filter(E.isTruthy),[Me.Root]:()=>[]},ys="_isBookTreeNode",M0=new Map;function Zb(e){return M0.get(e)}function Yb(e,t){Wy(M0,e,()=>t)}function or(e,t){return!!(N0(e)&&e.entry.entryType===t)}function N0(e){return!!(E.hasKeys(e,[ys,"entry"])&&e[ys])}function Jb(){return{[ys]:!0,entry:{entryType:Me.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Hb({entries:e,debug:t}){const n=Zb(e);if(n)return n;const r=Jb();e.forEach(o=>mu({tree:r,newEntry:o,debug:t,manuallyAdded:!0}));const i=x0(r),s={tree:r,flattenedNodes:i};return Yb(e,s),t&&console.info("element-book tree:",r),s}function Qb(e,t,n){if(!t.parent)return e;const r=$a(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),mu({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=$a(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${hu(t).join(" > ")}`);return i}function mu({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=Kb[t.entryType](t);t.errors.push(...i);const s=Qb(e,t,n),o=ws(t.title),a=s.children[o];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[ys]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:r};s.children[o]=u,Vy(t,Me.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>mu({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function $a(e,t){const n=N0(e)?e.fullUrlBreadcrumbs.slice(0,-1):hu(e);return n.length?n.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function x0(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>x0(i));return[e,...n].flat()}function pu(e,t){return gu(e,["",...t],void 0)}function gu(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const s=e.children[i||""],o=s&&gu(s,r,n);return{...e.controls,...o}}function Xb(e,t,n){const r={...e};return gu(r,["",...t],n),r}function P0(e,t){const n=t?.controls||(or(e,Me.Page)?ke(e.entry.controls,(i,s)=>s.initValue):{});return{children:ke(e.children,(i,s)=>P0(s,t?.children?.[s.urlBreadcrumb])),controls:n}}function $t(e){const t={...e,entryType:Me.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,entryType:Me.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(E.isTruthy)};n.add(r.title),t.elementExamples[ws(i.title)]=i}}),t}var gt=(e=>(e.Search="search",e.Book="book",e))(gt||{});function Ca(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const hr={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs=globalThis,wu=rs.ShadowRoot&&(rs.ShadyCSS===void 0||rs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yu=Symbol(),ec=new WeakMap;let B0=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==yu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(wu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=ec.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ec.set(n,t))}return t}toString(){return this.cssText}};const we=e=>new B0(typeof e=="string"?e:e+"",void 0,yu),is=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new B0(n,e,yu)},eE=(e,t)=>{if(wu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=rs.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},tc=wu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return we(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tE,defineProperty:nE,getOwnPropertyDescriptor:rE,getOwnPropertyNames:iE,getOwnPropertySymbols:sE,getPrototypeOf:oE}=Object,Ys=globalThis,nc=Ys.trustedTypes,aE=nc?nc.emptyScript:"",uE=Ys.reactiveElementPolyfillSupport,zr=(e,t)=>e,bs={toAttribute(e,t){switch(t){case Boolean:e=e?aE:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},bu=(e,t)=>!tE(e,t),rc={attribute:!0,type:String,converter:bs,reflect:!1,hasChanged:bu};Symbol.metadata??=Symbol("metadata"),Ys.litPropertyMetadata??=new WeakMap;let Hn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=rc){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&nE(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=rE(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rc}static _$Ei(){if(this.hasOwnProperty(zr("elementProperties")))return;const t=oE(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(zr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zr("properties"))){const n=this.properties,r=[...iE(n),...sE(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(tc(i))}else t!==void 0&&n.push(tc(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eE(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:bs).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:bs;this._$Em=i,this[i]=o.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??bu)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};Hn.elementStyles=[],Hn.shadowRootOptions={mode:"open"},Hn[zr("elementProperties")]=new Map,Hn[zr("finalized")]=new Map,uE?.({ReactiveElement:Hn}),(Ys.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eu=globalThis,Es=Eu.trustedTypes,ic=Es?Es.createPolicy("lit-html",{createHTML:e=>e}):void 0,L0="$lit$",an=`lit$${Math.random().toFixed(9).slice(2)}$`,I0="?"+an,lE=`<${I0}>`,Rn=document,Qr=()=>Rn.createComment(""),Xr=e=>e===null||typeof e!="object"&&typeof e!="function",vu=Array.isArray,cE=e=>vu(e)||typeof e?.[Symbol.iterator]=="function",Go=`[ 	
\f\r]`,Pr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sc=/-->/g,oc=/>/g,kn=RegExp(`>|${Go}(?:([^\\s"'>=/]+)(${Go}*=${Go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ac=/'/g,uc=/"/g,R0=/^(?:script|style|textarea|title)$/i,fE=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),dE=fE(1),tt=Symbol.for("lit-noChange"),ce=Symbol.for("lit-nothing"),lc=new WeakMap,xn=Rn.createTreeWalker(Rn,129);function O0(e,t){if(!vu(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ic!==void 0?ic.createHTML(t):t}const hE=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Pr;for(let a=0;a<n;a++){const u=e[a];let l,f,c=-1,d=0;for(;d<u.length&&(o.lastIndex=d,f=o.exec(u),f!==null);)d=o.lastIndex,o===Pr?f[1]==="!--"?o=sc:f[1]!==void 0?o=oc:f[2]!==void 0?(R0.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=kn):f[3]!==void 0&&(o=kn):o===kn?f[0]===">"?(o=i??Pr,c=-1):f[1]===void 0?c=-2:(c=o.lastIndex-f[2].length,l=f[1],o=f[3]===void 0?kn:f[3]==='"'?uc:ac):o===uc||o===ac?o=kn:o===sc||o===oc?o=Pr:(o=kn,i=void 0);const p=o===kn&&e[a+1].startsWith("/>")?" ":"";s+=o===Pr?u+lE:c>=0?(r.push(l),u.slice(0,c)+L0+u.slice(c)+an+p):u+an+(c===-2?a:p)}return[O0(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class ei{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,f]=hE(t,n);if(this.el=ei.createElement(l,r),xn.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=xn.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(L0)){const d=f[o++],p=i.getAttribute(c).split(an),b=/([.?@])?(.*)/.exec(d);u.push({type:1,index:s,name:b[2],strings:p,ctor:b[1]==="."?pE:b[1]==="?"?gE:b[1]==="@"?wE:Js}),i.removeAttribute(c)}else c.startsWith(an)&&(u.push({type:6,index:s}),i.removeAttribute(c));if(R0.test(i.tagName)){const c=i.textContent.split(an),d=c.length-1;if(d>0){i.textContent=Es?Es.emptyScript:"";for(let p=0;p<d;p++)i.append(c[p],Qr()),xn.nextNode(),u.push({type:2,index:++s});i.append(c[d],Qr())}}}else if(i.nodeType===8)if(i.data===I0)u.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(an,c+1))!==-1;)u.push({type:7,index:s}),c+=an.length-1}s++}}static createElement(t,n){const r=Rn.createElement("template");return r.innerHTML=t,r}}function mr(e,t,n=e,r){if(t===tt)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=Xr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=mr(e,i._$AS(e,t.values),i,r)),t}let mE=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Rn).importNode(n,!0);xn.currentNode=i;let s=xn.nextNode(),o=0,a=0,u=r[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new kr(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new yE(s,this,t)),this._$AV.push(l),u=r[++a]}o!==u?.index&&(s=xn.nextNode(),o++)}return xn.currentNode=Rn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class kr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=ce,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=mr(this,t,n),Xr(t)?t===ce||t==null||t===""?(this._$AH!==ce&&this._$AR(),this._$AH=ce):t!==this._$AH&&t!==tt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):cE(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ce&&Xr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Rn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ei.createElement(O0(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new mE(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=lc.get(t.strings);return n===void 0&&lc.set(t.strings,n=new ei(t)),n}k(t){vu(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new kr(this.O(Qr()),this.O(Qr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Js{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=ce,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ce}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=mr(this,t,n,0),o=!Xr(t)||t!==this._$AH&&t!==tt,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=mr(this,a[r+u],n,u),l===tt&&(l=this._$AH[u]),o||=!Xr(l)||l!==this._$AH[u],l===ce?t=ce:t!==ce&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class pE extends Js{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ce?void 0:t}}class gE extends Js{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ce)}}class wE extends Js{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=mr(this,t,n,0)??ce)===tt)return;const r=this._$AH,i=t===ce&&r!==ce||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==ce&&(r===ce||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class yE{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){mr(this,t)}}const bE={I:kr},EE=Eu.litHtmlPolyfillSupport;EE?.(ei,kr),(Eu.litHtmlVersions??=[]).push("3.2.1");const vE=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new kr(t.insertBefore(Qr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Gr=class extends Hn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vE(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tt}};Gr._$litElement$=!0,Gr.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Gr});const DE=globalThis.litElementPolyfillSupport;DE?.({LitElement:Gr});(globalThis.litElementVersions??=[]).push("4.1.1");function yn(e){if(E.isObject(e))return ke(e,(n,r)=>{if(!E.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(E1(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?we(n):n.startsWith("-")?is`-${we(n)}`:is`--${we(n)}`;return{name:o,value:is`var(${o}, ${we(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${yn.name}' function.`)}function AE({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const Q=yn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),$E={nav:{hover:{background:Q["element-book-nav-hover-background-color"],foreground:Q["element-book-nav-hover-foreground-color"]},active:{background:Q["element-book-nav-active-background-color"],foreground:Q["element-book-nav-active-foreground-color"]},selected:{background:Q["element-book-nav-selected-background-color"],foreground:Q["element-book-nav-selected-foreground-color"]}},accent:{icon:Q["element-book-accent-icon-color"]},page:{background:Q["element-book-page-background-color"],backgroundFaint1:Q["element-book-page-background-faint-level-1-color"],backgroundFaint2:Q["element-book-page-background-faint-level-2-color"],foreground:Q["element-book-page-foreground-color"],foregroundFaint1:Q["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Q["element-book-page-foreground-faint-level-2-color"]}};function CE(e,t){V0(e,t,$E)}function ka(e){return E.hasKey(e,"_$cssResult$")}function cc(e){return E.hasKeys(e,["name","value","default"])&&E.isString(e.default)&&ka(e.name)&&ka(e.value)}function V0(e,t,n){Object.entries(t).forEach(([r,i])=>{const s=n[r];if(!s)throw new Error(`no nestedCssVar at key '${r}'`);if(ka(i)){if(!cc(s))throw new Error(`got a CSS result at '${r}' but no CSS var`);AE({forCssVar:s,onElement:e,toValue:String(i)})}else{if(cc(s))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);V0(e,i,s)}})}function fe(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let r=t[0].length,i=t[0].map((o,a)=>t.map(u=>u[a])),s=e.map(o=>i.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return n===1&&(s=s[0]),r===1?s.map(o=>o[0]):s}function Ei(e){return fn(e)==="string"}function fn(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function vs(e,{precision:t,unit:n}){return hn(e)?"none":_0(e,t)+(n??"")}function hn(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function be(e){return hn(e)?0:e}function _0(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const kE={deg:1,grad:.9,rad:180/Math.PI,turn:360};function U0(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let o=[];return s[2].replace(i,(a,u)=>{let l=u.match(r),f=u;if(l){let c=l[0],d=f.slice(0,-c.length);c==="%"?(f=new Number(d/100),f.type="<percentage>"):(f=new Number(d*kE[c]),f.type="<angle>",f.unit=c)}else n.test(f)?(f=new Number(f),f.type="<number>"):f==="none"&&(f=new Number(NaN),f.none=!0);a.startsWith("/")&&(f=f instanceof Number?f:new Number(f),f.alpha=!0),typeof f=="object"&&f instanceof Number&&(f.raw=u),o.push(f)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function W0(e){return e[e.length-1]}function ti(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function q0(e,t,n){return(n-e)/(t-e)}function Du(e,t,n){return ti(t[0],t[1],q0(e[0],e[1],n))}function j0(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function z0(e,t,n){return Math.max(Math.min(n,t),e)}function Hs(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function St(e,t){return Hs(Math.abs(e)**t,e)}function Au(e,t){return t===0?0:e/t}function G0(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var SE=Object.freeze({__proto__:null,bisectLeft:G0,clamp:z0,copySign:Hs,interpolate:ti,interpolateInv:q0,isNone:hn,isString:Ei,last:W0,mapRange:Du,multiplyMatrices:fe,parseCoordGrammar:j0,parseFunction:U0,serializeNumber:vs,skipNone:be,spow:St,toPrecision:_0,type:fn,zdiv:Au});class FE{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const mn=new FE;var nt={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Be={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Sa(e){return Array.isArray(e)?e:Be[e]}function Ds(e,t,n,r={}){if(e=Sa(e),t=Sa(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(mn.run("chromatic-adaptation-start",i),i.M||(i.W1===Be.D65&&i.W2===Be.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Be.D50&&i.W2===Be.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),mn.run("chromatic-adaptation-end",i),i.M)return fe(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const TE=new Set(["<number>","<percentage>","<angle>"]);function fc(e,t,n,r){return Object.entries(e.coords).map(([s,o],a)=>{let u=t.coordGrammar[a],l=r[a],f=l?.type,c;if(l.none?c=u.find(b=>TE.has(b)):c=u.find(b=>b==f),!c){let b=o.name||s;throw new TypeError(`${f??l.raw} not allowed for ${b} in ${n}()`)}let d=c.range;f==="<percentage>"&&(d||=[0,1]);let p=o.range||o.refRange;return d&&p&&(r[a]=Du(d,p,r[a])),c})}function K0(e,{meta:t}={}){let n={str:String(e)?.trim()};if(mn.run("parse-start",n),n.color)return n.color;if(n.parsed=U0(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,o=[i,s],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let f of B.all){let c=f.getFormat("color");if(c&&(o.includes(c.id)||c.ids?.filter(d=>o.includes(d)).length)){const d=Object.keys(f.coords).map((b,v)=>n.parsed.args[v]||0);let p;return c.coordGrammar&&(p=fc(f,c,"color",d)),t&&Object.assign(t,{formatId:"color",types:p}),c.id.startsWith("--")&&!i.startsWith("--")&&nt.warn(`${f.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${i}).`),i.startsWith("--")&&!c.id.startsWith("--")&&nt.warn(`${f.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${i}).`),{spaceId:f.id,coords:d,alpha:a}}}let u="",l=i in B.registry?i:s;if(l in B.registry){let f=B.registry[l].formats?.color?.id;f&&(u=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of B.all){let s=i.getFormat(r);if(s&&s.type==="function"){let o=1;(s.lastAlpha||W0(n.parsed.args).alpha)&&(o=n.parsed.args.pop());let a=n.parsed.args,u;return s.coordGrammar&&(u=fc(i,s,r,a)),t&&Object.assign(t,{formatId:s.name,types:u}),{spaceId:i.id,coords:a,alpha:o}}}}else for(let r of B.all)for(let i in r.formats){let s=r.formats[i];if(s.type!=="custom"||s.test&&!s.test(n.str))continue;let o=s.parse(n.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function z(e){if(Array.isArray(e))return e.map(z);if(!e)throw new TypeError("Empty color reference");Ei(e)&&(e=K0(e));let t=e.space||e.spaceId;return t instanceof B||(e.space=B.get(t)),e.alpha===void 0&&(e.alpha=1),e}const ME=75e-6;class B{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?B.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Sa(r),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:B.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:NE(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),mn.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=ME}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,s)=>{let o=r[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,u]=o.range;return(a===void 0||i>=a-n)&&(u===void 0||i<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=dc(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=dc(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=z(t);[t,n]=[a.space,a.coords]}if(t=B.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,i=t.path,s,o;for(let a=0;a<r.length&&r[a].equals(i[a]);a++)s=r[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>o;a--)n=r[a].toBase(n);for(let a=o+1;a<i.length;a++)n=i[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=z(t);[t,n]=[r.space,r.coords]}return t=B.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(B.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof B)return t;if(fn(t)==="string"){let i=B.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return B.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=fn(t),i,s;if(r==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=B.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=fn(s),r==="number"||r==="string"&&s>=0){let u=Object.entries(i.coords)[s];if(u)return{space:i,id:u[0],index:s,...u[1]}}i=B.get(i);let o=s.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function NE(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function dc(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=j0(e.coords);let n=Object.entries(t).map(([r,i],s)=>{let o=e.coordGrammar[s][0],a=i.range||i.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,i)=>r.map((s,o)=>{let{fromRange:a,toRange:u,suffix:l}=n[o];return a&&u&&(s=Du(a,u,s)),s=vs(s,{precision:i,unit:l}),s})}return e}var Ce=new B({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ge extends B{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ce),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=fe(t.toXYZ_M,n);return this.white!==this.base.white&&(r=Ds(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=Ds(this.base.white,this.white,n),fe(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function vi(e,t){return e=z(e),!t||e.space.equals(t)?e.coords.slice():(t=B.get(t),t.from(e))}function He(e,t){e=z(e);let{space:n,index:r}=B.resolveCoord(t,e.space);return vi(e,n)[r]}function $u(e,t,n){return e=z(e),t=B.get(t),e.coords=t.to(e.space,n),e}$u.returns="color";function Yt(e,t,n){if(e=z(e),arguments.length===2&&fn(arguments[1])==="object"){let r=arguments[1];for(let i in r)Yt(e,i,r[i])}else{typeof n=="function"&&(n=n(He(e,t)));let{space:r,index:i}=B.resolveCoord(t,e.space),s=vi(e,r);s[i]=n,$u(e,r,s)}return e}Yt.returns="color";var Cu=new B({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ce,fromBase:e=>Ds(Ce.white,"D50",e),toBase:e=>Ds("D50",Ce.white,e)});const xE=216/24389,hc=24/116,Ri=24389/27;let Ko=Be.D50;var Qe=new B({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ko,base:Cu,fromBase(e){let n=e.map((r,i)=>r/Ko[i]).map(r=>r>xE?Math.cbrt(r):(Ri*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>hc?Math.pow(t[0],3):(116*t[0]-16)/Ri,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ri,t[2]>hc?Math.pow(t[2],3):(116*t[2]-16)/Ri].map((r,i)=>r*Ko[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Mt(e){return(e%360+360)%360}function PE(e,t){if(e==="raw")return t;let[n,r]=t.map(Mt),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var ni=new B({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qe,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Mt(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const mc=25**7,As=Math.PI,pc=180/As,zn=As/180;function gc(e){const t=e*e;return t*t*t*e}function Z0(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=z([e,t]);let[s,o,a]=Qe.from(e),u=ni.from(Qe,[s,o,a])[1],[l,f,c]=Qe.from(t),d=ni.from(Qe,[l,f,c])[1];u<0&&(u=0),d<0&&(d=0);let p=(u+d)/2,b=gc(p),v=.5*(1-Math.sqrt(b/(b+mc))),C=(1+v)*o,$=(1+v)*f,M=Math.sqrt(C**2+a**2),R=Math.sqrt($**2+c**2),W=C===0&&a===0?0:Math.atan2(a,C),J=$===0&&c===0?0:Math.atan2(c,$);W<0&&(W+=2*As),J<0&&(J+=2*As),W*=pc,J*=pc;let Ne=l-s,ft=R-M,Ie=J-W,Ke=W+J,Ct=Math.abs(Ie),Pt;M*R===0?Pt=0:Ct<=180?Pt=Ie:Ie>180?Pt=Ie-360:Ie<-180?Pt=Ie+360:nt.warn("the unthinkable has happened");let Si=2*Math.sqrt(R*M)*Math.sin(Pt*zn/2),Tp=(s+l)/2,vo=(M+R)/2,Uu=gc(vo),Bt;M*R===0?Bt=Ke:Ct<=180?Bt=Ke/2:Ke<360?Bt=(Ke+360)/2:Bt=(Ke-360)/2;let Wu=(Tp-50)**2,Mp=1+.015*Wu/Math.sqrt(20+Wu),qu=1+.045*vo,Sr=1;Sr-=.17*Math.cos((Bt-30)*zn),Sr+=.24*Math.cos(2*Bt*zn),Sr+=.32*Math.cos((3*Bt+6)*zn),Sr-=.2*Math.cos((4*Bt-63)*zn);let ju=1+.015*vo*Sr,Np=30*Math.exp(-1*((Bt-275)/25)**2),xp=2*Math.sqrt(Uu/(Uu+mc)),Pp=-1*Math.sin(2*Np*zn)*xp,Fi=(Ne/(n*Mp))**2;return Fi+=(ft/(r*qu))**2,Fi+=(Si/(i*ju))**2,Fi+=Pp*(ft/(r*qu))*(Si/(i*ju)),Math.sqrt(Fi)}const BE=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LE=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],IE=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],RE=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var pr=new B({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ce,fromBase(e){let n=fe(BE,e).map(r=>Math.cbrt(r));return fe(IE,n)},toBase(e){let n=fe(RE,e).map(r=>r**3);return fe(LE,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Fa(e,t){[e,t]=z([e,t]);let[n,r,i]=pr.from(e),[s,o,a]=pr.from(t),u=n-s,l=r-o,f=i-a;return Math.sqrt(u**2+l**2+f**2)}const OE=75e-6;function In(e,t,{epsilon:n=OE}={}){e=z(e),t||(t=e.space),t=B.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function gr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Y0(e,t,n="lab"){n=B.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((s,o,a)=>{let u=i[a];return isNaN(o)||isNaN(u)?s:s+(u-o)**2},0))}function VE(e,t){return Y0(e,t,"lab")}const _E=Math.PI,wc=_E/180;function UE(e,t,{l:n=2,c:r=1}={}){[e,t]=z([e,t]);let[i,s,o]=Qe.from(e),[,a,u]=ni.from(Qe,[i,s,o]),[l,f,c]=Qe.from(t),d=ni.from(Qe,[l,f,c])[1];a<0&&(a=0),d<0&&(d=0);let p=i-l,b=a-d,v=s-f,C=o-c,$=v**2+C**2-b**2,M=.511;i>=16&&(M=.040975*i/(1+.01765*i));let R=.0638*a/(1+.0131*a)+.638,W;Number.isNaN(u)&&(u=0),u>=164&&u<=345?W=.56+Math.abs(.2*Math.cos((u+168)*wc)):W=.36+Math.abs(.4*Math.cos((u+35)*wc));let J=Math.pow(a,4),Ne=Math.sqrt(J/(J+1900)),ft=R*(Ne*W+1-Ne),Ie=(p/(n*M))**2;return Ie+=(b/(r*R))**2,Ie+=$/ft**2,Math.sqrt(Ie)}const yc=203;var ku=new B({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ce,fromBase(e){return e.map(t=>Math.max(t*yc,0))},toBase(e){return e.map(t=>Math.max(t/yc,0))}});const Oi=1.15,Vi=.66,bc=2610/2**14,WE=2**14/2610,Ec=3424/2**12,vc=2413/2**7,Dc=2392/2**7,qE=1.7*2523/2**5,Ac=2**5/(1.7*2523),_i=-.56,Zo=16295499532821565e-27,jE=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],zE=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],GE=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],KE=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var J0=new B({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:ku,fromBase(e){let[t,n,r]=e,i=Oi*t-(Oi-1)*r,s=Vi*n-(Vi-1)*t,a=fe(jE,[i,s,r]).map(function(d){let p=Ec+vc*(d/1e4)**bc,b=1+Dc*(d/1e4)**bc;return(p/b)**qE}),[u,l,f]=fe(GE,a);return[(1+_i)*u/(1+_i*u)-Zo,l,f]},toBase(e){let[t,n,r]=e,i=(t+Zo)/(1+_i-_i*(t+Zo)),o=fe(KE,[i,n,r]).map(function(d){let p=Ec-d**Ac,b=Dc*d**Ac-vc;return 1e4*(p/b)**WE}),[a,u,l]=fe(zE,o),f=(a+(Oi-1)*l)/Oi,c=(u+(Vi-1)*f)/Vi;return[f,c,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ta=new B({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:J0,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Mt(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function ZE(e,t){[e,t]=z([e,t]);let[n,r,i]=Ta.from(e),[s,o,a]=Ta.from(t),u=n-s,l=r-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let f=i-a,c=2*Math.sqrt(r*o)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+l**2+c**2)}const H0=3424/4096,Q0=2413/128,X0=2392/128,$c=2610/16384,YE=2523/32,JE=16384/2610,Cc=32/2523,HE=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],QE=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],XE=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],ev=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Ma=new B({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:ku,fromBase(e){let t=fe(HE,e);return tv(t)},toBase(e){let t=nv(e);return fe(ev,t)}});function tv(e){let t=e.map(function(n){let r=H0+Q0*(n/1e4)**$c,i=1+X0*(n/1e4)**$c;return(r/i)**YE});return fe(QE,t)}function nv(e){return fe(XE,e).map(function(r){let i=Math.max(r**Cc-H0,0),s=Q0-X0*r**Cc;return 1e4*(i/s)**JE})}function rv(e,t){[e,t]=z([e,t]);let[n,r,i]=Ma.from(e),[s,o,a]=Ma.from(t);return 720*Math.sqrt((n-s)**2+.25*(r-o)**2+(i-a)**2)}const iv=Be.D65,em=.42,kc=1/em,Yo=2*Math.PI,tm=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],sv=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],ov=[[460,451,288],[460,-891,-261],[460,-220,-6300]],av={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Mn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},uv=180/Math.PI,Sc=Math.PI/180;function nm(e,t){return e.map(r=>{const i=St(t*Math.abs(r)*.01,em);return 400*Hs(i,r)/(i+27.13)})}function lv(e,t){const n=100/t*27.13**kc;return e.map(r=>{const i=Math.abs(r);return Hs(n*St(i/(400-i),kc),r)})}function cv(e){let t=Mt(e);t<=Mn.h[0]&&(t+=360);const n=G0(Mn.h,t)-1,[r,i]=Mn.h.slice(n,n+2),[s,o]=Mn.e.slice(n,n+2),a=Mn.H[n],u=(t-r)/s;return a+100*u/(u+(i-t)/o)}function fv(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=Mn.h.slice(n,n+2),[s,o]=Mn.e.slice(n,n+2);return Mt((t*(o*r-s*i)-100*r*o)/(t*(o-s)-100*o))}function rm(e,t,n,r,i){const s={};s.discounting=i,s.refWhite=e,s.surround=r;const o=e.map(v=>v*100);s.la=t,s.yb=n;const a=o[1],u=fe(tm,o);r=av[s.surround];const l=r[0];s.c=r[1],s.nc=r[2];const c=(1/(5*s.la+1))**4;s.fl=c*s.la+.1*(1-c)*(1-c)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(v=>ti(1,a/v,d)),s.dRgbInv=s.dRgb.map(v=>1/v);const p=u.map((v,C)=>v*s.dRgb[C]),b=nm(p,s.fl);return s.aW=s.nbb*(2*b[0]+b[1]+.05*b[2]),s}const Fc=rm(iv,64/Math.PI*.2,20,"average",!1);function Na(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=Mt(e.h)*Sc:n=fv(e.H)*Sc;const r=Math.cos(n),i=Math.sin(n);let s=0;e.J!==void 0?s=St(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/s:e.M!==void 0?o=e.M/t.flRoot/s:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=St(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*St(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*u,c=l/t.nbb,d=23*(c+.305)*Au(a,23*f+a*(11*r+108*i)),p=d*r,b=d*i,v=lv(fe(ov,[c,p,b]).map(C=>C*1/1403),t.fl);return fe(sv,v.map((C,$)=>C*t.dRgbInv[$])).map(C=>C/100)}function im(e,t){const n=e.map(R=>R*100),r=nm(fe(tm,n).map((R,W)=>R*t.dRgb[W]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,s=(r[0]+r[1]-2*r[2])/9,o=(Math.atan2(s,i)%Yo+Yo)%Yo,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*Au(a*Math.sqrt(i**2+s**2),r[0]+r[1]+1.05*r[2]+.305),l=St(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),f=t.nbb*(2*r[0]+r[1]+.05*r[2]),c=St(f/t.aW,.5*t.c*t.z),d=100*St(c,2),p=4/t.c*c*(t.aW+4)*t.flRoot,b=l*c,v=b*t.flRoot,C=Mt(o*uv),$=cv(C),M=50*St(t.c*l/(t.aW+4),1/2);return{J:d,C:b,h:C,s:M,Q:p,M:v,H:$}}var dv=new B({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ce,fromBase(e){const t=im(e,Fc);return[t.J,t.M,t.h]},toBase(e){return Na({J:e[0],M:e[1],h:e[2]},Fc)}});const hv=Be.D65,mv=216/24389,sm=24389/27;function pv(e){return 116*(e>mv?Math.cbrt(e):(sm*e+16)/116)-16}function xa(e){return e>8?Math.pow((e+16)/116,3):e/sm}function gv(e,t){let[n,r,i]=e,s=[],o=0;if(i===0)return[0,0,0];let a=xa(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let f=0,c=1/0;for(;f<=l;){s=Na({J:o,C:r,h:n},t);const d=Math.abs(s[1]-a);if(d<c){if(d<=u)return s;c=d}o=o-(s[1]-a)*o/(2*s[1]),f+=1}return Na({J:o,C:r,h:n},t)}function wv(e,t){const n=pv(e[1]);if(n===0)return[0,0,0];const r=im(e,Su);return[Mt(r.h),r.C,n]}const Su=rm(hv,200/Math.PI*xa(50),xa(50)*100,"average",!1);var ri=new B({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Ce,fromBase(e){return wv(e)},toBase(e){return gv(e,Su)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const yv=Math.PI/180,Tc=[1,.007,.0228];function Mc(e){e[1]<0&&(e=ri.fromBase(ri.toBase(e)));const t=Math.log(Math.max(1+Tc[2]*e[1]*Su.flRoot,1))/Tc[2],n=e[0]*yv,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function bv(e,t){[e,t]=z([e,t]);let[n,r,i]=Mc(ri.from(e)),[s,o,a]=Mc(ri.from(t));return Math.sqrt((n-s)**2+(r-o)**2+(i-a)**2)}var wr={deltaE76:VE,deltaECMC:UE,deltaE2000:Z0,deltaEJz:ZE,deltaEITP:rv,deltaEOK:Fa,deltaEHCT:bv};function Ev(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Nc={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function pn(e,{method:t=nt.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=z(e),Ei(arguments[1])?n=arguments[1]:n||(n=e.space),n=B.get(n),In(e,n,{epsilon:0}))return e;let o;if(t==="css")o=vv(e,{space:n});else{if(t!=="clip"&&!In(e,n)){Object.prototype.hasOwnProperty.call(Nc,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:s}=Nc[t]);let a=Z0;if(r!==""){for(let l in wr)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=wr[l];break}}let u=pn(le(e,n),{method:"clip",space:n});if(a(e,u)>i){if(Object.keys(s).length===3){let M=B.resolveCoord(s.channel),R=He(le(e,M.space),M.id);if(hn(R)&&(R=0),R>=s.max)return le({space:"xyz-d65",coords:Be.D65},e.space);if(R<=s.min)return le({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=B.resolveCoord(t),f=l.space,c=l.id,d=le(e,f);d.coords.forEach((M,R)=>{hn(M)&&(d.coords[R]=0)});let b=(l.range||l.refRange)[0],v=Ev(i),C=b,$=He(d,c);for(;$-C>v;){let M=gr(d);M=pn(M,{space:n,method:"clip"}),a(d,M)-i<v?C=He(d,c):$=He(d,c),Yt(d,c,(C+$)/2)}o=le(d,n)}else o=u}else o=le(e,n);if(t==="clip"||!In(o,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[f,c]=a[l];return f!==void 0&&(u=Math.max(f,u)),c!==void 0&&(u=Math.min(u,c)),u})}}return n!==e.space&&(o=le(o,e.space)),e.coords=o.coords,e}pn.returns="color";const xc={WHITE:{space:pr,coords:[1,0,0]},BLACK:{space:pr,coords:[0,0,0]}};function vv(e,{space:t}={}){e=z(e),t||(t=e.space),t=B.get(t);const i=B.get("oklch");if(t.isUnbounded)return le(e,t);const s=le(e,i);let o=s.coords[0];if(o>=1){const b=le(xc.WHITE,t);return b.alpha=e.alpha,le(b,t)}if(o<=0){const b=le(xc.BLACK,t);return b.alpha=e.alpha,le(b,t)}if(In(s,t,{epsilon:0}))return le(s,t);function a(b){const v=le(b,t),C=Object.values(t.coords);return v.coords=v.coords.map(($,M)=>{if("range"in C[M]){const[R,W]=C[M].range;return z0(R,$,W)}return $}),v}let u=0,l=s.coords[1],f=!0,c=gr(s),d=a(c),p=Fa(d,c);if(p<.02)return d;for(;l-u>1e-4;){const b=(u+l)/2;if(c.coords[1]=b,f&&In(c,t,{epsilon:0}))u=b;else if(d=a(c),p=Fa(d,c),p<.02){if(.02-p<1e-4)break;f=!1,u=b}else l=b}return d}function le(e,t,{inGamut:n}={}){e=z(e),t=B.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=pn(i,n===!0?void 0:n)),i}le.returns="color";function Kr(e,{precision:t=nt.precision,format:n="default",inGamut:r=!0,...i}={}){let s;e=z(e);let o=n;n=e.space.getFormat(n)??e.space.getFormat("default")??B.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!In(e)&&(a=pn(gr(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)s=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(d=>vs(d,{precision:t})));let l=[...a];if(u==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let f=e.alpha;t!==null&&(f=vs(f,{precision:t}));let c=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${f}`;s=`${u}(${l.join(n.commas?", ":" ")}${c})`}return s}const Dv=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Av=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Qs=new Ge({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Dv,fromXYZ_M:Av});const Ui=1.09929682680944,Pc=.018053968510807;var om=new Ge({id:"rec2020",name:"REC.2020",base:Qs,toBase(e){return e.map(function(t){return t<Pc*4.5?t/4.5:Math.pow((t+Ui-1)/Ui,1/.45)})},fromBase(e){return e.map(function(t){return t>=Pc?Ui*Math.pow(t,.45)-(Ui-1):4.5*t})}});const $v=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Cv=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var am=new Ge({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:$v,fromXYZ_M:Cv});const kv=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ae=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var um=new Ge({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:kv,fromXYZ_M:Ae}),Bc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Lc=Array(3).fill("<percentage> | <number>[0, 255]"),Ic=Array(3).fill("<number>[0, 255]");var yr=new Ge({id:"srgb",name:"sRGB",base:um,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Lc},rgb_number:{name:"rgb",commas:!0,coords:Ic,noAlpha:!0},color:{},rgba:{coords:Lc,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ic},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let r=n&&e.every(s=>s%17===0);return"#"+e.map(s=>r?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Bc.black,t.alpha=0):t.coords=Bc[e],t.coords)return t}}}}),lm=new Ge({id:"p3",cssId:"display-p3",name:"P3",base:am,fromBase:yr.fromBase,toBase:yr.toBase});nt.display_space=yr;let Sv;if(typeof CSS<"u"&&CSS.supports)for(let e of[Qe,om,lm]){let t=e.getMinCoords(),r=Kr({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){nt.display_space=e;break}}function Fv(e,{space:t=nt.display_space,...n}={}){let r=Kr(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!nt.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(hn)||hn(e.alpha))&&!(Sv??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=gr(e),i.coords=i.coords.map(be),i.alpha=be(i.alpha),r=Kr(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=le(i,t),r=new String(Kr(i,n)),r.color=i}return r}function Tv(e,t){return e=z(e),t=z(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function gn(e){return He(e,[Ce,"y"])}function cm(e,t){Yt(e,[Ce,"y"],t)}function Mv(e){Object.defineProperty(e.prototype,"luminance",{get(){return gn(this)},set(t){cm(this,t)}})}var Nv=Object.freeze({__proto__:null,getLuminance:gn,register:Mv,setLuminance:cm});function xv(e,t){e=z(e),t=z(t);let n=Math.max(gn(e),0),r=Math.max(gn(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const Pv=.56,Bv=.57,Lv=.62,Iv=.65,Rc=.022,Rv=1.414,Ov=.1,Vv=5e-4,_v=1.14,Oc=.027,Uv=1.14;function Vc(e){return e>=Rc?e:e+(Rc-e)**Rv}function Gn(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function Wv(e,t){t=z(t),e=z(e);let n,r,i,s,o,a;t=le(t,"srgb"),[s,o,a]=t.coords;let u=Gn(s)*.2126729+Gn(o)*.7151522+Gn(a)*.072175;e=le(e,"srgb"),[s,o,a]=e.coords;let l=Gn(s)*.2126729+Gn(o)*.7151522+Gn(a)*.072175,f=Vc(u),c=Vc(l),d=c>f;return Math.abs(c-f)<Vv?r=0:d?(n=c**Pv-f**Bv,r=n*_v):(n=c**Iv-f**Lv,r=n*Uv),Math.abs(r)<Ov?i=0:r>0?i=r-Oc:i=r+Oc,i*100}function qv(e,t){e=z(e),t=z(t);let n=Math.max(gn(e),0),r=Math.max(gn(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const jv=5e4;function zv(e,t){e=z(e),t=z(t);let n=Math.max(gn(e),0),r=Math.max(gn(t),0);return r>n&&([n,r]=[r,n]),r===0?jv:(n-r)/r}function Gv(e,t){e=z(e),t=z(t);let n=He(e,[Qe,"l"]),r=He(t,[Qe,"l"]);return Math.abs(n-r)}const Kv=216/24389,_c=24/116,Wi=24389/27;let Jo=Be.D65;var Pa=new B({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Jo,base:Ce,fromBase(e){let n=e.map((r,i)=>r/Jo[i]).map(r=>r>Kv?Math.cbrt(r):(Wi*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>_c?Math.pow(t[0],3):(116*t[0]-16)/Wi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Wi,t[2]>_c?Math.pow(t[2],3):(116*t[2]-16)/Wi].map((r,i)=>r*Jo[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Ho=Math.pow(5,.5)*.5+.5;function Zv(e,t){e=z(e),t=z(t);let n=He(e,[Pa,"l"]),r=He(t,[Pa,"l"]),i=Math.abs(Math.pow(n,Ho)-Math.pow(r,Ho)),s=Math.pow(i,1/Ho)*Math.SQRT2-40;return s<7.5?0:s}var ss=Object.freeze({__proto__:null,contrastAPCA:Wv,contrastDeltaPhi:Zv,contrastLstar:Gv,contrastMichelson:qv,contrastWCAG21:xv,contrastWeber:zv});function Yv(e,t,n={}){Ei(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let s=Object.keys(ss).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=z(e),t=z(t);for(let s in ss)if("contrast"+r.toLowerCase()===s.toLowerCase())return ss[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Xs(e){let[t,n,r]=vi(e,Ce),i=t+15*n+3*r;return[4*t/i,9*n/i]}function fm(e){let[t,n,r]=vi(e,Ce),i=t+n+r;return[t/i,n/i]}function Jv(e){Object.defineProperty(e.prototype,"uv",{get(){return Xs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return fm(this)}})}var Hv=Object.freeze({__proto__:null,register:Jv,uv:Xs,xy:fm});function Vr(e,t,n={}){Ei(n)&&(n={method:n});let{method:r=nt.deltaE,...i}=n;for(let s in wr)if("deltae"+r.toLowerCase()===s.toLowerCase())return wr[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function Qv(e,t=.25){let r=[B.get("oklch","lch"),"l"];return Yt(e,r,i=>i*(1+t))}function Xv(e,t=.25){let r=[B.get("oklch","lch"),"l"];return Yt(e,r,i=>i*(1-t))}var eD=Object.freeze({__proto__:null,darken:Xv,lighten:Qv});function dm(e,t,n=.5,r={}){return[e,t]=[z(e),z(t)],fn(n)==="object"&&([n,r]=[.5,n]),Di(e,t,r)(n)}function hm(e,t,n={}){let r;Fu(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[z(e),z(t)],r=Di(e,t,u));let l=Vr(e,t),f=i>0?Math.max(o,Math.ceil(l/i)+1):o,c=[];if(a!==void 0&&(f=Math.min(f,a)),f===1)c=[{p:.5,color:r(.5)}];else{let d=1/(f-1);c=Array.from({length:f},(p,b)=>{let v=b*d;return{p:v,color:r(v)}})}if(i>0){let d=c.reduce((p,b,v)=>{if(v===0)return 0;let C=Vr(b.color,c[v-1].color,s);return Math.max(p,C)},0);for(;d>i;){d=0;for(let p=1;p<c.length&&c.length<a;p++){let b=c[p-1],v=c[p],C=(v.p+b.p)/2,$=r(C);d=Math.max(d,Vr($,b.color),Vr($,v.color)),c.splice(p,0,{p:C,color:r(C)}),p++}}}return c=c.map(d=>d.color),c}function Di(e,t,n={}){if(Fu(e)){let[u,l]=[e,t];return Di(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:s,premultiplied:o}=n;e=z(e),t=z(t),e=gr(e),t=gr(t);let a={colors:[e,t],options:n};if(r?r=B.get(r):r=B.registry[nt.interpolationSpace]||e.space,i=i?B.get(i):r,e=le(e,r),t=le(t,r),e=pn(e),t=pn(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[f,c]=[He(e,l),He(t,l)];isNaN(f)&&!isNaN(c)?f=c:isNaN(c)&&!isNaN(f)&&(c=f),[f,c]=PE(u,[f,c]),Yt(e,l,f),Yt(t,l,c)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let l=e.coords.map((d,p)=>{let b=t.coords[p];return ti(d,b,u)}),f=ti(e.alpha,t.alpha,u),c={space:r,coords:l,alpha:f};return o&&(c.coords=c.coords.map(d=>d/f)),i!==r&&(c=le(c,i)),c},{rangeArgs:a})}function Fu(e){return fn(e)==="function"&&!!e.rangeArgs}nt.interpolationSpace="lab";function tD(e){e.defineFunction("mix",dm,{returns:"color"}),e.defineFunction("range",Di,{returns:"function<color>"}),e.defineFunction("steps",hm,{returns:"array<color>"})}var nD=Object.freeze({__proto__:null,isRange:Fu,mix:dm,range:Di,register:tD,steps:hm}),mm=new B({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:yr,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,s]=e,[o,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:o=(i-s)/l+(i<s?6:0);break;case i:o=(s-r)/l+2;break;case s:o=(r-i)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(s){let o=(s+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),pm=new B({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:mm,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),rD=new B({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:pm,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let a=n/i;return[t,0,a*100]}let s=1-r,o=s===0?0:1-n/s;return[t,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const iD=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],sD=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var gm=new Ge({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:iD,fromXYZ_M:sD}),oD=new Ge({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:gm,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const aD=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],uD=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var wm=new Ge({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Cu,toXYZ_M:aD,fromXYZ_M:uD});const lD=1/512,cD=16/512;var fD=new Ge({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:wm,toBase(e){return e.map(t=>t<cD?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=lD?t**(1/1.8):16*t)}}),dD=new B({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:pr,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Mt(i)]},toBase(e){let[t,n,r]=e,i,s;return isNaN(r)?(i=0,s=0):(i=n*Math.cos(r*Math.PI/180),s=n*Math.sin(r*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let ym=Be.D65;const hD=216/24389,Uc=24389/27,[Wc,qc]=Xs({space:Ce,coords:ym});var bm=new B({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:ym,base:Ce,fromBase(e){let t=[be(e[0]),be(e[1]),be(e[2])],n=t[1],[r,i]=Xs({space:Ce,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let s=n<=hD?Uc*n:116*Math.cbrt(n)-16;return[s,13*s*(r-Wc),13*s*(i-qc)]},toBase(e){let[t,n,r]=e;if(t===0||hn(t))return[0,0,0];n=be(n),r=be(r);let i=n/(13*t)+Wc,s=r/(13*t)+qc,o=t<=8?t/Uc:Math.pow((t+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Tu=new B({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:bm,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Mt(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const mD=216/24389,pD=24389/27,jc=Ae[0][0],zc=Ae[0][1],Qo=Ae[0][2],Gc=Ae[1][0],Kc=Ae[1][1],Xo=Ae[1][2],Zc=Ae[2][0],Yc=Ae[2][1],ea=Ae[2][2];function Kn(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function $s(e){const t=Math.pow(e+16,3)/1560896,n=t>mD?t:e/pD,r=n*(284517*jc-94839*Qo),i=n*(838422*Qo+769860*zc+731718*jc),s=n*(632260*Qo-126452*zc),o=n*(284517*Gc-94839*Xo),a=n*(838422*Xo+769860*Kc+731718*Gc),u=n*(632260*Xo-126452*Kc),l=n*(284517*Zc-94839*ea),f=n*(838422*ea+769860*Yc+731718*Zc),c=n*(632260*ea-126452*Yc);return{r0s:r/s,r0i:i*e/s,r1s:r/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/c,b0i:f*e/c,b1s:l/(c+126452),b1i:(f-769860)*e/(c+126452)}}function Jc(e,t){const n=t/360*Math.PI*2,r=Kn(e.r0s,e.r0i,n),i=Kn(e.r1s,e.r1i,n),s=Kn(e.g0s,e.g0i,n),o=Kn(e.g1s,e.g1i,n),a=Kn(e.b0s,e.b0i,n),u=Kn(e.b1s,e.b1i,n);return Math.min(r,i,s,o,a,u)}var gD=new B({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Tu,gamutSpace:yr,fromBase(e){let[t,n,r]=[be(e[0]),be(e[1]),be(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=$s(t),o=Jc(s,r);i=n/o*100}return[r,i,t]},toBase(e){let[t,n,r]=[be(e[0]),be(e[1]),be(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=$s(r);i=Jc(s,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Ae[0][0];Ae[0][1];Ae[0][2];Ae[1][0];Ae[1][1];Ae[1][2];Ae[2][0];Ae[2][1];Ae[2][2];function Zn(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Hc(e){let t=Zn(e.r0s,e.r0i),n=Zn(e.r1s,e.r1i),r=Zn(e.g0s,e.g0i),i=Zn(e.g1s,e.g1i),s=Zn(e.b0s,e.b0i),o=Zn(e.b1s,e.b1i);return Math.min(t,n,r,i,s,o)}var wD=new B({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Tu,gamutSpace:"self",fromBase(e){let[t,n,r]=[be(e[0]),be(e[1]),be(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=$s(t),o=Hc(s);i=n/o*100}return[r,i,t]},toBase(e){let[t,n,r]=[be(e[0]),be(e[1]),be(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=$s(r);i=Hc(s)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Qc=203,Xc=2610/2**14,yD=2**14/2610,bD=2523/2**5,ef=2**5/2523,tf=3424/2**12,nf=2413/2**7,rf=2392/2**7;var ED=new Ge({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Qs,toBase(e){return e.map(function(t){return(Math.max(t**ef-tf,0)/(nf-rf*t**ef))**yD*1e4/Qc})},fromBase(e){return e.map(function(t){let n=Math.max(t*Qc/1e4,0),r=tf+nf*n**Xc,i=1+rf*n**Xc;return(r/i)**bD})}});const sf=.17883277,of=.28466892,af=.55991073,ta=3.7743;var vD=new Ge({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Qs,toBase(e){return e.map(function(t){return t<=.5?t**2/3*ta:(Math.exp((t-af)/sf)+of)/12*ta})},fromBase(e){return e.map(function(t){return t/=ta,t<=1/12?Math.sqrt(3*t):sf*Math.log(12*t-of)+af})}});const Em={};mn.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=vm(e.W1,e.W2,e.options.method))});mn.add("chromatic-adaptation-end",e=>{e.M||(e.M=vm(e.W1,e.W2,e.options.method))});function eo({id:e,toCone_M:t,fromCone_M:n}){Em[e]=arguments[0]}function vm(e,t,n="Bradford"){let r=Em[n],[i,s,o]=fe(r.toCone_M,e),[a,u,l]=fe(r.toCone_M,t),f=[[a/i,0,0],[0,u/s,0],[0,0,l/o]],c=fe(f,r.toCone_M);return fe(r.fromCone_M,c)}eo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});eo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});eo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});eo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Be,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Be.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const DD=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],AD=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Dm=new Ge({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Be.ACES,toXYZ_M:DD,fromXYZ_M:AD});const qi=2**-16,na=-.35828683,ji=(Math.log2(65504)+9.72)/17.52;var $D=new Ge({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[na,ji],name:"Red"},g:{range:[na,ji],name:"Green"},b:{range:[na,ji],name:"Blue"}},referred:"scene",base:Dm,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-qi)*2:n<ji?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(qi)+9.72)/17.52:t<qi?(Math.log2(qi+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),uf=Object.freeze({__proto__:null,A98RGB:oD,A98RGB_Linear:gm,ACEScc:$D,ACEScg:Dm,CAM16_JMh:dv,HCT:ri,HPLuv:wD,HSL:mm,HSLuv:gD,HSV:pm,HWB:rD,ICTCP:Ma,JzCzHz:Ta,Jzazbz:J0,LCH:ni,LCHuv:Tu,Lab:Qe,Lab_D65:Pa,Luv:bm,OKLCH:dD,OKLab:pr,P3:lm,P3_Linear:am,ProPhoto:fD,ProPhoto_Linear:wm,REC_2020:om,REC_2020_Linear:Qs,REC_2100_HLG:vD,REC_2100_PQ:ED,XYZ_ABS_D65:ku,XYZ_D50:Cu,XYZ_D65:Ce,sRGB:yr,sRGB_Linear:um});let re=class Oe{constructor(...t){let n;t.length===1&&(n=z(t[0]));let r,i,s;n?(r=n.space||n.spaceId,i=n.coords,s=n.alpha):[r,i,s]=t,Object.defineProperty(this,"space",{value:B.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Oe(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=Fv(this,...t);return n.color=new Oe(n.color),n}static get(t,...n){return t instanceof Oe?t:new Oe(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:s}=r,o=function(...a){let u=n(...a);if(s==="color")u=Oe.get(u);else if(s==="function<color>"){let l=u;u=function(...f){let c=l(...f);return Oe.get(c)},Object.assign(u,l)}else s==="array<color>"&&(u=u.map(l=>Oe.get(l)));return u};t in Oe||(Oe[t]=o),i&&(Oe.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let n in t)Oe.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Oe);else for(let n in t)Oe.defineFunction(n,t[n])}};re.defineFunctions({get:He,getAll:vi,set:Yt,setAll:$u,to:le,equals:Tv,inGamut:In,toGamut:pn,distance:Y0,toString:Kr});Object.assign(re,{util:SE,hooks:mn,WHITES:Be,Space:B,spaces:B.registry,parse:K0,defaults:nt});for(let e of Object.keys(uf))B.register(uf[e]);for(let e in B.registry)Ba(e,B.registry[e]);mn.add("colorspace-init-end",e=>{Ba(e.id,e),e.aliases?.forEach(t=>{Ba(t,e)})});function Ba(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(re.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,s)=>{try{return B.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=B.resolveCoord([t,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:u}=B.resolveCoord([t,s]);if(u>=0)return i[u]=o,this.setAll(e,i),!0}return Reflect.set(i,s,o,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}re.extend(wr);re.extend({deltaE:Vr});Object.assign(re,{deltaEMethods:wr});re.extend(eD);re.extend({contrast:Yv});re.extend(Hv);re.extend(Nv);re.extend(nD);re.extend(ss);const CD=Symbol("no update");class ra extends Oh()("observable-value-update"){}class kD extends Vh("observable-destroy"){}class SD{listenTarget=new F0;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];return n===CD||(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)?!1:(this.value=n,this.listenTarget.dispatch(new ra({detail:n})),!0)}listen(t,n){const r=i=>n(i.detail);return this.listenerMap.set(n,r),t&&n(this.value),this.listenTarget.listen(ra,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(ra,n)}destroy(){this.listenTarget.dispatch(new kD),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function FD(e,t){return Ty(e,t,(n,r)=>E.isFunction(n)&&E.isFunction(r)?!0:E.strictEquals(n,r))}const Am="__vir__custom__specifier__key__do__not__use__in__actual__objects";function $m(e){return E.hasKey(e,Am)}function TD({customName:e,defaultValue:t,checker:n}){return{customName:e,checker:n,defaultValue:t,[Am]:!0}}TD({customName:"UUID",defaultValue:Ny.isUuid("00000000-0000-1000-0000-000000000000"),checker:E.isUuid});function MD(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}const Cm="__vir__shape__definition__key__do__not__use__in__actual__objects";function km(e){return E.hasKey(e,Cm)}var Ee;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(Ee||(Ee={}));const Sm="__vir__shape__specifier__key__do__not__use__in__actual__objects";function ND(...e){return _n(e,Ee.And)}function La(...e){return _n(e,Ee.Enum)}function j(...e){return _n(e,Ee.Exact)}function to(...e){return _n(e,Ee.IndexedKeys)}function ie(...e){return _n(e,Ee.Or)}function nr(e,t){return _n([e,t],Ee.NumericRange)}function mt(e){return _n([e],Ee.Optional)}function no(e){return Nt(e,Ee.And)}function ro(e){return Nt(e,Ee.Class)}function io(e){return Nt(e,Ee.Enum)}function so(e){return Nt(e,Ee.Exact)}function oo(e){return Nt(e,Ee.IndexedKeys)}function Fm(e){return Nt(e,Ee.Tuple)}function Ai(e){return Nt(e,Ee.Or)}function ao(e){return Nt(e,Ee.Unknown)}function Tm(e){return Nt(e,Ee.NumericRange)}function Cs(e){return Nt(e,Ee.Optional)}function Nt(e,t){const n=$i(e);return!!n&&n.specifierType===t}function _n(e,t){return{[Sm]:!0,specifierType:t,parts:e}}function Pn(e,t,n,r){const i=$i(t);if(i){if(Tm(i))return E.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(ro(i))return e instanceof i.parts[0];if(no(i))return i.parts.every(s=>Pn(e,s));if(Ai(i))return i.parts.some(s=>Pn(e,s));if(so(i))return E.isObject(e)?Pn(e,i.parts[0]):e===i.parts[0];if(io(i))return E.hasValue(Object.values(i.parts[0]),e);if(oo(i))return E.isObject(e)?xD(e,i,!!n)&&Rh(e).every(s=>Pn(s,i.parts[0].values)):!1;if(ao(i))return!0}return r?t===e:MD(e,t)}function xD(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys;if(n)if(r){const s=Mu(t);return E.isBoolean(s)?s:s.every(o=>ee(e).some(a=>Pn(a,o,!1,!0)))}else return!0;else return ee(e).every(s=>Pn(s,i))}function Mu(e){const t=e.parts[0].keys,n=$i(t);if(E.isPropertyKey(t))return!0;if(n){if(ro(n))return!1;if(no(n))return!1;if(Ai(n)){const r=n.parts.map(i=>Mu(to({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(E.isPropertyKey)}else if(so(n)){const r=n.parts.filter(E.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(io(n))return Object.values(n.parts[0]);if(oo(n))return!1;if(ao(n))return!0}}return!1}function $i(e){if(E.isObject(e)&&E.hasKey(e,Sm)){if(!E.hasKey(e,"parts")||!E.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!E.hasKey(e,"specifierType")||!E.isEnumValue(e.specifierType,Ee))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}let lf=class extends TypeError{name="DefaultValueConstructionError"};function Ia(e){return Fn(e)}function Fn(e){const t=$i(e);if($m(e))return e.defaultValue;if(t){if(Fm(t))return t.parts.map(n=>Fn(n));if(Cs(t))return Fn(t.parts[0]);if(Tm(t))return t.parts[0];if(ro(t)){const n=t.parts[0];try{return new n}catch(r){throw new lf(`Failed to create default value for classShape for class '${n.name}': ${Le(r)}`)}}else{if(Ai(t)||so(t))return Fn(t.parts[0]);if(no(t))return t.parts.reduce((n,r)=>Object.assign(n,Fn(r)),{});if(io(t))return t.parts[1]||Object.values(t.parts[0])[0];if(oo(t)){const n=Mu(t);return!t.parts[0].required||E.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Fn(t.parts[0].values)]))}else{if(ao(t))return t.parts[0]??{};throw new lf(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return km(e)?Ia(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(Fn):E.isObject(e)?ke(e,(n,r)=>Ia(r)):e}function xt(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return Ia(e)},[Cm]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}let _e=class extends TypeError{name="ShapeMismatchError"};function PD(e,t,n={}){try{return Mm(e,t,n),!0}catch{return!1}}function Mm(e,t,n={},r=""){try{pt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?di(i,r):i}}function Ra(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function pt({subject:e,shape:t,keys:n,options:r}){if(ao(t))return!0;if(km(t))return pt({subject:e,shape:t.shape,keys:n,options:r});if($m(t)){if(!t.checker(e))throw new _e(`Subject ${m(e)} does not match ${t.customName} shape.`);return!0}const i=Ra(n);if($i(e))throw new _e(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(Fm(t)){if(!E.isArray(e))throw new _e(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((o,a)=>{const u=e[a];return pt({keys:[...n,a],options:r,shape:o,subject:u})})}else{if(Cs(t))return pt({keys:n,options:r,shape:t.parts[0],subject:e});if(Pn(e,t,!r.ignoreExtraKeys)){if(E.isFunction(t))return E.isFunction(e);if(ro(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(f=>[f,!1])),u=[];let l=!1;if(Ai(t)){const f=[];l=t.parts.some(c=>{try{const d=pt({subject:e,shape:c,keys:n,options:r});return Object.assign(a,d),!0}catch(d){if(d instanceof _e)return f.push(d.message),!1;throw d}}),!l&&E.isLengthAtLeast(f,1)&&u.push(f[0])}else if(no(t))l=t.parts.every(f=>{try{const c=pt({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof _e)return u.push(c.message),!1;throw c}});else if(so(t)){const f=pt({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,f),l=!0}else{if(io(t))throw new _e(`Cannot compare an enum specifier to an object at ${i}`);if(E.isArray(t)&&E.isArray(o))l=o.every((f,c)=>{const d=t.some(p=>{try{return pt({subject:f,shape:p,keys:[...n,c],options:r}),!0}catch(b){if(b instanceof _e)return u.push(b.message),!1;throw b}});return a[c]=d,d});else if(oo(t)){const f=ke(e,(c,d)=>(r.ignoreExtraKeys||pt({shape:t.parts[0].keys,subject:c,keys:[...n,c],options:r}),pt({shape:t.parts[0].values,subject:d,keys:[...n,c],options:r}),!0));Object.assign(a,f),l=!0}else{const f=BD({keys:n,options:r,shape:t,subject:e});Object.assign(a,f),l=!0}}if(u.length)throw new _e(fi(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).map(d=>Ra([...n,d])).join(",")}`;throw new _e(c)}return r.ignoreExtraKeys||Object.entries(a).forEach(([f,c])=>{if(!c)throw new _e(`subject as extra key '${f}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new _e(`Subject does not match shape definition at key ${i}`)}return!0}function BD({keys:e,options:t,shape:n,subject:r}){const i=Ra(e),s={};if(E.isObject(n)){const o=new Set(ee(n)),a=new Set(ee(r));o.forEach(u=>{(u in r||Cs(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new _e(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],f=Ai(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!f&&!c)throw new _e(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&Cs(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const f=n[u];pt({subject:l,shape:f,keys:[...e,u],options:t}),s[u]=!0})}else throw new _e(`Shape definition at ${i} was not an object.`);return s}const LD=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Nm=LD.reduce((e,t)=>(e[t]=t,e),{});ue.defaultZone.name;const xm=Nm.UTC,ID=xt({hour:nr(kl.min,kl.max),minute:nr(Sl.min,Sl.max),second:nr(Fl.min,Fl.max),millisecond:nr(Tl.min,Tl.max),timezone:La(Nm,xm)}),RD=xt({year:2023,month:nr($l.min,$l.max),day:nr(Cl.min,Cl.max),timezone:xm});xt(ND(RD,ID));O.Years+"",O.Quarters+"",O.Months+"",O.Weeks+"",O.Days+"",O.Hours+"",O.Minutes+"",O.Seconds+"",O.Milliseconds+"";xt(ie({get:j(I.Month),in:ie(j(I.Year),j(I.Quarter))},{get:j(I.Week),in:ie(j(I.Year),j(I.Quarter),j(I.Month))},{get:j(I.Day),in:ie(j(I.Year),j(I.Quarter),j(I.Month),j(I.Week))},{get:j(I.Hour),in:ie(j(I.Year),j(I.Quarter),j(I.Month),j(I.Week),j(I.Day))},{get:j(I.Minute),in:ie(j(I.Year),j(I.Quarter),j(I.Month),j(I.Week),j(I.Day),j(I.Hour))},{get:j(I.Second),in:ie(j(I.Year),j(I.Quarter),j(I.Month),j(I.Week),j(I.Day),j(I.Hour),j(I.Minute))},{get:j(I.Millisecond),in:ie(j(I.Year),j(I.Quarter),j(I.Month),j(I.Week),j(I.Day),j(I.Hour),j(I.Minute),j(I.Second))}));var cf;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(cf||(cf={}));var Oa;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Oa||(Oa={}));var ff;(function(e){e.Year="year",e.Month="month",e.Day="day"})(ff||(ff={}));const OD={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};m1(OD,_t(Oa));ue.defaultLocale;function VD(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}const Pm="__vir__shape__definition__key__do__not__use__in__actual__objects";function Bm(e){return E.hasKey(e,Pm)}var ze;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional"})(ze||(ze={}));const Lm="__vir__shape__specifier__key__do__not__use__in__actual__objects";function _D(...e){return Rm(e,ze.IndexedKeys)}function UD(e){return Rm([e],ze.Unknown)}function uo(e){return Jt(e,ze.And)}function lo(e){return Jt(e,ze.Class)}function co(e){return Jt(e,ze.Enum)}function fo(e){return Jt(e,ze.Exact)}function ho(e){return Jt(e,ze.IndexedKeys)}function Ci(e){return Jt(e,ze.Or)}function mo(e){return Jt(e,ze.Unknown)}function Im(e){return Jt(e,ze.NumericRange)}function ks(e){return Jt(e,ze.Optional)}function Jt(e,t){const n=ki(e);return!!n&&n.specifierType===t}function Rm(e,t){return{[Lm]:!0,specifierType:t,parts:e}}function Bn(e,t,n,r){const i=ki(t);if(i){if(Im(i))return E.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(lo(i))return e instanceof i.parts[0];if(uo(i))return i.parts.every(s=>Bn(e,s));if(Ci(i))return i.parts.some(s=>Bn(e,s));if(fo(i))return E.isObject(e)?Bn(e,i.parts[0]):e===i.parts[0];if(co(i))return E.hasValue(Object.values(i.parts[0]),e);if(ho(i))return E.isObject(e)?WD(e,i,!!n)&&Rh(e).every(s=>Bn(s,i.parts[0].values)):!1;if(mo(i))return!0}return r?t===e:VD(e,t)}function WD(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys;if(n)if(r){const s=Nu(t);return E.isBoolean(s)?s:s.every(o=>ee(e).some(a=>Bn(a,o,!1,!0)))}else return!0;else return ee(e).every(s=>Bn(s,i))}function Nu(e){const t=e.parts[0].keys,n=ki(t);if(E.isPropertyKey(t))return!0;if(n){if(lo(n))return!1;if(uo(n))return!1;if(Ci(n)){const r=n.parts.map(i=>Nu(_D({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(E.isPropertyKey)}else if(fo(n)){const r=n.parts.filter(E.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(co(n))return Object.values(n.parts[0]);if(ho(n))return!1;if(mo(n))return!0}}return!1}function ki(e){if(E.isObject(e)&&E.hasKey(e,Lm)){if(!E.hasKey(e,"parts")||!E.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!E.hasKey(e,"specifierType")||!E.isEnumValue(e.specifierType,ze))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class df extends TypeError{name="DefaultValueConstructionError"}function Va(e){return Qn(e)}function Qn(e){const t=ki(e);if(t){if(ks(t))return Qn(t.parts[0]);if(Im(t))return t.parts[0];if(lo(t)){const n=t.parts[0];try{return new n}catch(r){throw new df(`Failed to create default value for classShape for class '${n.name}': ${Le(r)}`)}}else{if(Ci(t)||fo(t))return Qn(t.parts[0]);if(uo(t))return t.parts.reduce((n,r)=>Object.assign(n,Qn(r)),{});if(co(t))return Object.values(t.parts[0])[0];if(ho(t)){const n=Nu(t);return!t.parts[0].required||E.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Qn(t.parts[0].values)]))}else{if(mo(t))return t.parts[0]??{};throw new df(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Bm(e)?Va(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(Qn):E.isObject(e)?ke(e,(n,r)=>Va(r)):e}function qD(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return Va(e)},[Pm]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}class it extends TypeError{name="ShapeMismatchError"}function jD(e,t,n={}){try{return zD(e,t,n),!0}catch{return!1}}function zD(e,t,n={},r=""){try{kt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?di(i,r):i}}function _a(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function kt({subject:e,shape:t,keys:n,options:r}){if(mo(t))return!0;if(Bm(t))return kt({subject:e,shape:t.shape,keys:n,options:r});const i=_a(n);if(ki(e))throw new it(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(ks(t))return kt({keys:n,options:r,shape:t.parts[0],subject:e});if(Bn(e,t,!r.ignoreExtraKeys)){if(E.isFunction(t))return E.isFunction(e);if(lo(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(f=>[f,!1])),u=[];let l=!1;if(Ci(t)){const f=[];l=t.parts.some(c=>{try{const d=kt({subject:e,shape:c,keys:n,options:r});return Object.assign(a,d),!0}catch(d){if(d instanceof it)return f.push(d.message),!1;throw d}}),!l&&E.isLengthAtLeast(f,1)&&u.push(f[0])}else if(uo(t))l=t.parts.every(f=>{try{const c=kt({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof it)return u.push(c.message),!1;throw c}});else if(fo(t)){const f=kt({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,f),l=!0}else{if(co(t))throw new it(`Cannot compare an enum specifier to an object at ${i}`);if(E.isArray(t)&&E.isArray(o))l=o.every((f,c)=>{const d=t.some(p=>{try{return kt({subject:f,shape:p,keys:[...n,c],options:r}),!0}catch(b){if(b instanceof it)return u.push(b.message),!1;throw b}});return a[c]=d,d});else if(ho(t)){const f=ke(e,(c,d)=>(r.ignoreExtraKeys||kt({shape:t.parts[0].keys,subject:c,keys:[...n,c],options:r}),kt({shape:t.parts[0].values,subject:d,keys:[...n,c],options:r}),!0));Object.assign(a,f),l=!0}else{const f=GD({keys:n,options:r,shape:t,subject:e});Object.assign(a,f),l=!0}}if(u.length)throw new it(fi(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).map(d=>_a([...n,d])).join(",")}`;throw new it(c)}return r.ignoreExtraKeys||Object.entries(a).forEach(([f,c])=>{if(!c)throw new it(`subject as extra key '${f}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new it(`Subject does not match shape definition at key ${i}`);return!0}function GD({keys:e,options:t,shape:n,subject:r}){const i=_a(e),s={};if(E.isObject(n)){const o=new Set(ee(n)),a=new Set(ee(r));o.forEach(u=>{(u in r||ks(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new it(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],f=Ci(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!f&&!c)throw new it(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&ks(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const f=n[u];kt({subject:l,shape:f,keys:[...e,u],options:t}),s[u]=!0})}else throw new it(`Shape definition at ${i} was not an object.`);return s}const KD=qD({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:UD()});function ia(e){return jD(e,KD,{allowExtraKeys:!0})}class Om extends SD{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||FD}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ZD}=bE,hf=()=>document.createComment(""),Br=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=r.insertBefore(hf(),i),o=r.insertBefore(hf(),i);n=new ZD(s,o,e,e.options)}else{const s=n._$AB.nextSibling,o=n._$AM,a=o!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==o._$AU&&n._$AP(u)}if(s!==i||a){let u=n._$AA;for(;u!==s;){const l=u.nextSibling;r.insertBefore(u,i),u=l}}}return n},Sn=(e,t,n=e)=>(e._$AI(t,n),e),YD={},JD=(e,t=YD)=>e._$AH=t,HD=e=>e._$AH,sa=e=>{e._$AP?.(!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po={ATTRIBUTE:1,CHILD:2,ELEMENT:6},bn=e=>(...t)=>({_$litDirective$:e,values:t});class Ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const QD={attribute:!0,type:String,converter:bs,reflect:!1,hasChanged:bu},XD=(e=QD,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(r==="setter"){const{name:o}=n;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+r)};function e5(e){return(t,n)=>typeof n=="object"?XD(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=bn(class extends Ht{constructor(e){if(super(e),e.type!==po.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return tt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vm=e=>e??ce;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ua extends Ht{constructor(t){if(super(t),this.it=ce,t.type!==po.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ce||t==null)return this._t=void 0,this.it=t;if(t===tt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Ua.directiveName="unsafeHTML",Ua.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mf extends Ua{}mf.directiveName="unsafeSVG",mf.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t5(e,t,n){return e?t(e):n?.(e)}class _m extends Gr{static assign;static assignedInputs;static tagName;static styles;static render;static inputsType;static stateType;static updateStateType;static events;static stateInitStatic;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function n5(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function os(e){return E.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function xu(e){return E.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Um(e){return Vs(e,t=>{if(os(t))return t.definition;if(xu(t))return t.tagInterpolationKey||t},E.isTruthy)}const Wm=new WeakMap;function r5(e,t){const n=Um(t);return qm(Wm,[e,...n]).value?.template}function i5(e,t,n){const r=Um(t);return zm(Wm,[e,...r],n)}function qm(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=jm(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?qm(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function jm(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function zm(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=jm(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),zm(u,t,n,r+1)}function Gm(e,t,n){const r=r5(e,t),i=r??n();if(!r){const a=i5(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=n5(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function Km(e,t,n,r){const i=[],s=[],o=[],a=[];return e.forEach((l,f)=>{const c=i.length-1,d=i[c],p=f-1,b=t[p];r&&r(l);let v,C=[];if(typeof d=="string"&&(v=n(d,l,b),v)){i[c]=[d,v.replacement].join(""),o.push(p);const M=v.getExtraValues;C=M?M(b):[],C.length&&M?(i[c]+=" ",C.forEach((R,W)=>{W&&i.push(" ")}),a.push(R=>{const W=R[p],J=M(W);return{index:p,values:J}}),i.push(l)):i[c]+=l}v||i.push(l);const $=e.raw[f];v?(s[c]=[s[c],v.replacement,$].join(""),C.length&&C.forEach(()=>{s.push("")})):s.push($)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const f=a.flatMap(c=>c(l));return{valueIndexDeletions:o,valueInsertions:f}}}}function s5(...[e,t,n]){if(xu(n))return{replacement:n.tagName,getExtraValues:void 0}}function o5(e,t){return Km(e,t,s5)}function T(e,...t){const n=Gm(e,t,()=>o5(e,t));return is(n.strings,...n.values)}const a5={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Zm(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof _m?!0:Zm(n)}function Ym(e,t){const n=e.instanceState;ee(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&ee(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),u5(e)}function u5(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function pf(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class l5 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Pu(){return e=>class extends l5{static type=e;_type=e;constructor(t){super(e,t)}}}function At(){return Pu()}function c5(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Pu()([e,r].join("-"));return n[r]=i,n},{}):{}}function f5(e){return e?ke(e,t=>t):{}}const Ss=Symbol("element-vir-state-setup");function d5(e){return E.isObject(e)?Ss in e&&E.isFunction(e[Ss]):!1}function Jm(e,t){t in e||e5()(e,t)}function h5(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function gf(e,t){const n=e;function r(o){t?h5(o,e,e.tagName):Jm(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set(o,a,u){const l=d5(u)?u[Ss]():u;r(a);const f=n[a];function c(p){o[a]=p,n[a]=p}const d=e.observablePropertyListenerMap[a];if(f!==l&&ia(f)&&d&&f.removeListener(d),ia(l))if(d)l.listen(!1,d);else{let p=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=p,l.listen(!1,p)}else ia(f)&&(e.observablePropertyListenerMap[a]=void 0);return c(l),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function m5({hostClassNames:e,cssVars:t}){return{hostClasses:ke(e,(n,r)=>({name:we(r),selector:we(`:host(.${r})`)})),cssVars:t}}function p5({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&ee(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function g5({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(o){ee(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:n,slotNames:r,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function w5(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}function go(e){const t=e;if(!E.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");if(!E.isString(t.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!t.render||typeof t.render=="string")throw new Error(`Failed to define element '${t.tagName}': render is not a function`);const n={...a5,...t.options},r=c5(t.tagName,t.events),i=f5(t.hostClasses);t.hostClasses&&pf(t.tagName,t.hostClasses),t.cssVars&&pf(t.tagName,t.cssVars);const s=t.cssVars?yn(t.cssVars):{},o=w5(t.slotNames),a=typeof t.styles=="function"?t.styles(m5({hostClassNames:i,cssVars:s})):t.styles||T``,u=t.render;function l(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:c}}const f=class extends _m{static elementOptions=n;static tagName=t.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return g5({element:this,eventsMap:r,cssVars:s,slotNamesMap:o})}static assign=l;static events=r;static render=u;static hostClasses=i;static cssVars=s;static init=t;static slotNames=o;static stateInitStatic=t.stateInitStatic;get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}_initCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;_haveInputsBeenSet=!1;render(){this._internalRenderCount++;try{Zm(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${go.name}' to define ${t.tagName}.`),this._hasRendered=!0;const c=this.createRenderParams();if(!this._initCalled&&t.init&&(this._initCalled=!0,t.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(c);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return p5({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:i,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=di(c,`Failed to render ${t.tagName}`);return console.error(d),this._lastRenderError=d,Le(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&t.init){this._initCalled=!0;const c=this.createRenderParams();if(t.init(c)instanceof Promise)throw new TypeError(`init in '${t.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{E.hasKey(c,"destroy")&&E.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanup){const c=this.createRenderParams();if(t.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${t.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(c){Ym(this,c)}observablePropertyListenerMap={};instanceInputs=gf(this,!1);instanceState=gf(this,!n.allowPolymorphicState);constructor(){super();const c=t.stateInitStatic||{};ee(c).forEach(d=>{Jm(this,d),this.instanceState[d]=c[d]}),this.definition=f}};return Object.defineProperties(f,{name:{value:b1(t.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,f),f}function Hm(){return e=>{const t=e;if(!E.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return go({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wf=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},y5=bn(class extends Ht{constructor(e){if(super(e),e.type!==po.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],s=[];let o=0;for(const a of e)i[o]=r?r(a,o):o,s[o]=n(a,o),o++;return{values:s,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=HD(e),{values:s,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??=[],u=[];let l,f,c=0,d=i.length-1,p=0,b=s.length-1;for(;c<=d&&p<=b;)if(i[c]===null)c++;else if(i[d]===null)d--;else if(a[c]===o[p])u[p]=Sn(i[c],s[p]),c++,p++;else if(a[d]===o[b])u[b]=Sn(i[d],s[b]),d--,b--;else if(a[c]===o[b])u[b]=Sn(i[c],s[b]),Br(e,u[b+1],i[c]),c++,b--;else if(a[d]===o[p])u[p]=Sn(i[d],s[p]),Br(e,i[c],i[d]),d--,p++;else if(l===void 0&&(l=wf(o,p,b),f=wf(a,c,d)),l.has(a[c]))if(l.has(a[d])){const v=f.get(o[p]),C=v!==void 0?i[v]:null;if(C===null){const $=Br(e,i[c]);Sn($,s[p]),u[p]=$}else u[p]=Sn(C,s[p]),Br(e,i[c],C),i[v]=null;p++}else sa(i[d]),d--;else sa(i[c]),c++;for(;p<=b;){const v=Br(e,u[b+1]);Sn(v,s[p]),u[p++]=v}for(;c<=d;){const v=i[c++];v!==null&&sa(v)}return this.ut=o,JD(e,u),tt}}),b5=y5;function wo(e,t){return si(e,t),e.element}function E5(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function si(e,t){const n=E5(e),r=n?`: in ${n}`:"";if(e.type!==po.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function v5(e){const t=bn(class extends Ht{element;constructor(n){super(n),this.element=wo(n,e)}render(n){return this.element.setAttribute(e,n),tt}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function ne(e,t){return D5(e,t)}const D5=bn(class extends Ht{element;lastListenerMetaData;constructor(e){super(e),this.element=wo(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),tt}}),yf="onDomCreated",bf=bn(class extends Ht{element;constructor(e){super(e),si(e,yf)}update(e,[t]){si(e,yf);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),oa="onResize",Qm=bn(class extends Ht{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),si(e,oa)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${oa} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){si(e,oa),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function qe(e,t,n){return t5(e,()=>t,()=>n)}const{attributeDirective:A5}=v5("data-test-id"),_r=A5;ee({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",render:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function $5(e){return{[Ss]:e}}function Xm(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return{defineElement:()=>r=>(t(r),Hm()(n(r))),defineElementNoInputs:r=>(t(r),go(n(r)))}}function C5(e,t){return k5(void 0,e)}const k5=bn(class extends Ht{element;constructor(e){super(e),this.element=wo(e,"assign")}render(e,t){return Ym(this.element,t),tt}}),S5={};function F5(e,t){return t.map((n,r)=>{const i=e[r],s=e[r+1];if(i&&s){const{shouldHaveTagNameHere:o}=ep(i,s);if(o&&E.isString(n))return{tagName:n,tagInterpolationKey:kh(S5,n,()=>({tagName:n}))}}return n})}function ep(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function T5(...[e,t,n]){const r=os(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:s}=ep(e,t),o=xu(r);if(o&&s&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(!s||!o)return;if(i&&r.elementOptions&&!r.elementOptions.ignoreUnsetInputs&&!os(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(u){const l=os(u)?u.inputs:void 0;return[i&&l?C5(l):void 0].filter(E.isTruthy)}}}function M5(e){}function N5(e){return Km(e.strings,e.values,T5,M5)}function D(e,...t){const n=F5(e,t),r=dE(e,...n),i=Gm(e,n,()=>N5(r));return{...r,strings:i.strings,values:i.values}}function tp(e){return ke(e,(t,n)=>n instanceof re?we(n.toString({format:"hex"})):tp(n))}const x5="dodgerblue";function Wa(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function aa({background:e,foreground:t}){return{background:e??new re(Wa(t)),foreground:t??new re(Wa(e))}}function P5(e){return e==="black"?"white":"black"}const B5={black:{foregroundFaint1:new re("#ccc"),foregroundFaint2:new re("#eee")},white:{foregroundFaint1:new re("#ccc"),foregroundFaint2:new re("#eee")}},L5={black:{backgroundFaint1:new re("#666"),backgroundFaint2:new re("#444")},white:{backgroundFaint1:new re("#ccc"),backgroundFaint2:new re("#fafafa")}};function Ef({themeColor:e=x5,themeStyle:t="light"}={}){const n=new re(e),r=new re(t==="dark"?"black":"white"),i=Wa(r),s=new re(i),o={nav:{hover:aa({background:n.clone().set({"hsl.l":93})}),active:aa({background:n.clone().set({"hsl.l":90})}),selected:aa({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...L5[P5(i)],foreground:s,...B5[i]}};return tp(o)}var qt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(qt||{});async function qa(e=1){const t=new Kf;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function I5(e){return[...e.children,...e.shadowRoot?.children??[]]}function R5(e){return e.matches(":focus")}function Fs(e){if(e instanceof ShadowRoot)return Fs(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:Fs(t)}function np(e,t){if(t(e))return e;const n=Fs(e);if(n)return np(n,t)}async function O5(e){return V5(e,1)}async function V5(e,t){return new Promise(n=>{new IntersectionObserver((i,s)=>{Cr.isLengthAtLeast(i,1),s.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function Ur(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,s=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return r}function _5(e){const t=Fs(e);return t&&np(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}const U5={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},W5=Object.keys(U5),q5={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},j5=Object.keys(q5),z5={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},G5=Object.keys(z5);Array.from(new Set([...W5,...G5,...j5].sort()));function K5({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let o=0,a=0;o<r;o++){const u=s.codePointAt(o);for(;a<n;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const Z5=Sh(32);function as(e){return e.join(Z5)}function rp(e){if(!e.length)return[];const t=as(e),n=rp(e.slice(0,-1));return[t,...n]}const Y5=["error","errors"];function J5(e){return Y5.includes(e)}function H5({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(o=>(r(o),as(o.fullUrlBreadcrumbs))).forEach(o=>n[o]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&J5(t),o=as(i.fullUrlBreadcrumbs);if(K5({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||n[o]){const u=rp(i.fullUrlBreadcrumbs);r(i),u.forEach(l=>n[l]=!0)}else n[o]=!1}),e.filter(i=>{const s=as(i.fullUrlBreadcrumbs),o=n[s];if(!E.isBoolean(o))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class Bu extends Error{name="SpaRouterError"}class vf extends Bu{name="GlobalUrlEventsConsolidationError"}class Q5 extends Bu{name="SanitizationDepthMaxed"}xt({paths:[""],search:ie(void 0,to({keys:"",values:[""],required:!1})),hash:ie(void 0,"")});const X5=xt({basePath:ie("",void 0),sanitizeRoute:e=>e,maxListenerCount:ie(1,void 0),disableWarnings:ie(void 0,!1),isPaused:ie(!1,void 0)}),ua="://";function Lu(...e){const t=e.join("/"),[n,r=""]=t.includes(ua)?t.split(ua):["",t];let i=!1;const s=r.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const f=l[u+1];let c=a;const d=f?.startsWith("?"),p=!a.includes("?")&&d,b=f==="?";if(d||p){i=!0;let v=!1;const C=l.slice(u+2).reduce(($,M)=>(M.includes("#")&&(v=!0),v?$.concat(M):[$,M].join("&")),"");c=[a,f,b?sr({value:C,prefix:"&"}):C].join("")}return o.concat(c)},[]);return[n,n?ua:"",s.join("/")].join("")}var br;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(br||(br={}));var Er;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Er||(Er={}));const eA=xt({encoding:mt(ie(void 0,La(br))),searchParamStrategy:mt(ie(void 0,La(Er)))});function zi(e,t){return e.map(n=>{if(n!=null)return ar(String(n),t)}).filter(n=>n!=null)}function ar(e,t){return t?.encoding===br.Decode?decodeURIComponent(e):t?.encoding===br.Encode?encodeURIComponent(e):e}const tA=xt(to({keys:"",values:[""],required:!0}));function nA(e,t,n){const r=n?.searchParamStrategy===Er.Clear?{}:ke(e,(o,a)=>E.isString(a)?[a]:a),i=ke(t,(o,a)=>{if(n?.searchParamStrategy===Er.Append){const u=r[o],l=E.isArray(u)?u:[u];if(a){const f=E.isArray(a)?a:[a];return zi([...l,...f],n)}else return zi(l,n)}else return E.isArray(a)?zi(a,n):a?zi([a],n):void 0});return _s({...r,...i},(o,a)=>!!a)}function ip(e,t){return E.isString(e)&&!e.includes("?")?{}:(E.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[o,...a]=d1(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=sp({options:t,key:o,value:a}),l=kh(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function rA(e){if(e!=null)return E.isArray(e)?[...e]:e===""?[]:[e]}function iA(e,t){const n=Vs(Object.entries(e),([r,i])=>{const s=rA(i);return s?.length?s.map(o=>{const a=sp({options:t,key:r,value:o});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?et({value:n.join("&"),prefix:"?"}):""}function sp({options:e,key:t,value:n}){return{key:ar(t,e),value:ar(String(n),e)}}function op({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",n?n+"@":"",yo({hostname:t,port:i}),Iu({hash:e,pathname:r,search:o})].join("")}function ap({pathname:e}){const t=sr({value:e,prefix:"/"});return t?t.split("/"):[]}function Iu({hash:e,pathname:t,search:n}){return[et({value:t,prefix:"/"}),n?et({value:n,prefix:"?"}):"",e?et({value:e,prefix:"#"}):""].join("")}function yo({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function up({hostname:e,port:t,protocol:n}){return[n,yo({hostname:e,port:t})].filter(E.isTruthy).join("://")}function ur(e,t){const n=E.isString(e)?sr({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?et({value:ar(r,t),prefix:"#"}):"",s=n.replace(/#[^#]*$/,""),o=s.replace(/^[^?]*(?:\?|$)/,""),a=o?et({value:ar(o,t),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",f=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),c=f.replace(/@.*/,""),d=f.replace(/^[^@]*@/,""),p=c!==d,[b,...v]=p?c.split(":").reverse():[],C=v.toReversed().join("").replace(/[/:]/g,"")||"",$=b?.replace(/[/:]/g,"")||"",M=f1(d.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),R=M[0]?.endsWith("]")?"":M[1]===":"&&M[0]||"",J=d.replace(new RegExp(`:${R}($|/)`),"$1").replace(/\/.*/,""),Ne=d.replace(/^[^/]*(\/|$)/,"$1"),ft=ar(Ne.replace(/^[^/]*(?:\/|$)/,"/"),t),Ie=yo({hostname:J,port:R}),Ke=up({hostname:J,port:R,protocol:l}),Ct=op({hash:i,hostname:J,password:$,pathname:ft,port:R,protocol:l,search:a,username:C}),Pt=ip(a),Si=ap({pathname:ft});return{fullPath:Iu({hash:i,pathname:ft,search:a}),hash:i,host:Ie,hostname:J,href:Ct,origin:Ke,password:$,pathname:ft,paths:Si,port:R,protocol:l,search:a,searchParams:Pt,username:C}}xt({hash:mt(ie(void 0,"")),search:mt(ie(void 0,"",to({keys:"",required:!1,values:ie(null,void 0,"",-1,!1,0n)}))),hostname:mt(ie(void 0,"")),pathname:mt(ie(void 0,"")),paths:mt(ie(void 0,[""])),protocol:mt(ie(void 0,"")),username:mt(ie(void 0,"")),password:mt(ie(void 0,"")),port:mt(ie(void 0,"",-1))});function sA(e,t,n){const r=!!n,i=t==null||PD(t,eA),s=i?ur(""):E.instanceOf(e,URL)||E.isString(e)?ur(e):e,o=i?e:t,a=E.isString(o)&&o.startsWith("."),u=E.isString(o)||E.instanceOf(o,URL)?_s(ur(o),(v,C)=>E.isTruthy(C)):o,l=r?n:i?t:void 0,f=ke(s,(v,C)=>{if(!E.hasKey(u,v))return C;const $=u[v];return E.isNumber($)?String($):E.isString($)?v==="hash"&&$?et({value:$,prefix:"#"}):v==="pathname"?et({value:$,prefix:"/"}):$:C});E.hasKey(u,"paths")&&u.paths&&(f.pathname=Lu(a?s.pathname:"",...u.paths));const c=E.isString(u.search)?ip(et({value:u.search,prefix:"?"})):Th(u.search||{}),d=nA(f.searchParams,c,{...l,encoding:br.None}),p=iA(d,l);return{...f,searchParams:d,search:p,paths:ap(f),fullPath:Iu(f),host:yo(f),origin:up(f),href:op({...f,search:p})}}const oA=xt({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:tA,hash:"",fullPath:"/",href:"/"});({...oA.defaultValue});const aA=0;function lp(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==aA)}const bo="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const uA=globalThis.history.pushState;function Df(...e){const t=uA.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(bo)),t}const lA=globalThis.history.replaceState;function Af(...e){const t=lA.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(bo)),t}function cA(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===Df)throw new vf("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Af)throw new vf("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Df,globalThis.history.replaceState=Af,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(bo))})}}function Gi(e,t){const n=ur(e),r=sr({value:sr({value:n.pathname,prefix:et({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],s=Object.keys(n.searchParams).length?n.searchParams:void 0,o=n.hash?sr({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class fA{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Mm(t,X5),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new Om({defaultValue:n,equalityCheck:()=>!1}),cA(),this.removeGlobalListener=T0(globalThis,bo,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Q5("Looping route sanitization detected; aborting window URL change listener.");const r=Gi(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);E.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Lu(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Gi(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Gi(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),s=this.routeIncludesBasePath(Gi(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return sA(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?et({value:s.hash,prefix:"#"}):"#"},{searchParamStrategy:Er.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=ur(r);return this.params.isPaused||!n.force&&E.jsonEquals(ur(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return lp(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new Bu(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function dA(e){return new fA({basePath:e,sanitizeRoute(t){return{paths:hA(t.paths),hash:void 0,search:void 0}}})}function hA(e){const t=e[0];if(E.isEnumValue(t,gt)){if(t===gt.Book)return[gt.Book,...e.slice(1)];if(t===gt.Search)return e[1]?[t,e[1]]:[gt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return hr.paths}const Ts=Pu()("element-book-change-route"),$f="vira-",{defineElement:mA}=Xm({assertInputs:e=>{if(!e.tagName.startsWith($f))throw new Error(`Tag name should start with '${$f}' but got '${e.tagName}'`)}}),Qt=mA,k=yn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),pA=re;function gA(e){try{if(!e)throw new Error("invalid empty color");return new pA(e)}catch{throw new Error(`Invalid color: ${m(e)}`)}}function de({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Cf(e,t){const n=ee(t).map(r=>{const i=t[r],s=gA(i);return`${k[r].name}: ${s.toString()};`}).join(" ");return de({name:e.name,svgTemplate:D`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const cp=de({name:"Check24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),yt=yn({"vira-form-input-radius":"8px"}),Eo=T`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Et=yn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),On=yn({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":T`calc(${yt["vira-form-input-radius"].value} + 4px)`});function Ru({selector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=2}){const i=we(Nh(r+n+t));return T`
        ${we(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${On["vira-focus-outline-color"].value};
            border-radius: ${On["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const ln=yn({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":On["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),wA=T`
    padding: 0;
    margin: 0;
`,un=T`
    ${wA};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,kf=T`#e2e2e2`,fp={menuShadow:T`
        filter: drop-shadow(0px 5px 5px ${kf});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:T`
        filter: drop-shadow(0px -5px 5px ${kf});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},oi=T`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,V=Qt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>T`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Wt=Qt()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>T`
        :host {
            display: flex;
            ${oi};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${V} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${V} {
            transition: opacity
                ${Et["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${yt["vira-form-input-radius"].value}
                ${yt["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${yt["vira-form-input-radius"].value}
                ${yt["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return D`
            <div class="option">
                <${V.assign({icon:cp})}></${V}>
                <slot>${e.label}</slot>
            </div>
        `}}),ja="group";function yA(e,t,n){return[e,t,n].filter(r=>r!==void 0).join(",")||""}function bA(e){const[t,n,r]=e.split(",");return n?{type:"2d",xCord:Gl(t),yCord:Gl(n),isGroup:r===ja}:{type:"1d",isGroup:t===ja}}function EA(e,t){Object.entries(t).forEach(([n,r])=>{E.isBoolean(r)&&r?e.setAttribute(n,""):E.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const vA=bn(class extends Ht{element;lastKey;constructor(e){super(e),this.element=wo(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),tt}}),za={name:"data-nav"},Xn="nav-activated",Ga={js:{click(e){return`${e}.${Xn}`},selected(e){return`${e}:focus`}},css:{click(e){return T`
                ${we(Ga.js.click(e))}
            `},selected(e){return T`
                ${we(Ga.js.selected(e))}
            `}}},DA={activateKeys:["Space","Return","Enter"]};function AA(){dp=Th(DA)}let dp;AA();function Sf(e){return dp.activateKeys.some(t=>{const n=t.toLowerCase();return n===e.key.toLowerCase()||n===e.code.toLowerCase()})}function $A(e,t){const n=yA(e,t);return vA(`${e}-${t}`,r=>{const i=r.hasAttribute("tabindex")||e===ja?{}:{tabindex:0},s={[za.name]:n,...i};Cr.instanceOf(r,HTMLElement),EA(r,s),r.style.getPropertyValue("cursor")||r.style.setProperty("cursor","pointer"),r.addEventListener("mousemove",o=>{o.target===r&&r.focus()},!0),r.addEventListener("mouseleave",o=>{o.target===r&&r.blur()},!0),r.addEventListener("mousedown",o=>{o.target===r&&r.classList.add(Xn)},!0),r.addEventListener("mouseup",o=>{o.target===r&&r.classList.remove(Xn)},!0),r.addEventListener("blur",()=>{r.classList.remove(Xn)},!0),r.addEventListener("keydown",o=>{o.target===r&&Sf(o)&&r.classList.add(Xn)},!0),r.addEventListener("keyup",o=>{o.target===r&&Sf(o)&&r.classList.remove(Xn)},!0)})}function CA(e,t){return hp([],e,t)}function hp(e,t,n){return!t||t.type==="child"?!1:t.type==="1d"?Ff(t.children,t,0,e,n):t.children.some((r,i)=>Ff(r,t,i,e,n))}function Ff(e,t,n,r,i){return e.some((s,o)=>{const a=E.hasKey(t,"isRoot")&&t.isRoot?r:[t,...r];return i(a,s,{x:o,y:n})?!0:hp(a,s,i)})}function kA(e){return e.toReversed().find(t=>!t.isGroup)}function ai(e){if(!e)return;let t,n,r;CA(e,(o,a,u)=>R5(a.element)?(t=o,n=a,r=u,!0):!1);const i=t?t[0]||e:void 0,s=t?kA(t)||e:void 0;if(!(!n||!i||!r||!s||!t))return{node:n,parent:i,nonGroupParent:s,ancestors:t}}function ui(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function SA(e){if(!e)return{success:!1,reason:"no nav tree"};const t=ai(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const n=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return n?(ui(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element}):{success:!1,reason:"failed to find first child to enter into"}}function FA(e){if(!e)return{success:!1,reason:"no nav tree"};const t=ai(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};const n=t.nonGroupParent;return n.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to"}:(ui(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element})}function mp(e){const t=[];return I5(e).forEach(n=>{if(!(n instanceof HTMLElement))return;const r=mp(n),i=n.hasAttribute(za.name)?bA(n.getAttribute(za.name)||""):void 0;if(!i){t.push(...r);return}t.push({children:r,element:n,navValue:i})}),t}function TA(e){const t=mp(e);return pp(t)}function pp(e){if(!E.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(n=>{const r=n.children.length?pp(n.children):void 0;if(n.navValue.isGroup&&!r){const o=new Error("group nav has no children");throw console.error(o,n),o}const i=MA(n,t.children),s=r?{element:n.element,children:r.children,type:r.type,isGroup:n.navValue.isGroup,coords:i}:{element:n.element,type:"child",coords:i,isGroup:!1};if(n.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(Cr.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(n.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==n.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,n),o}}),t}function MA(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}function Tf(e,t){return e>t}function Mf(e,t){return e<t}var ot;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(ot||(ot={}));function Ou(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?Ou(t):t}function Nf(e,t,n){if(!e)return{success:!1,reason:"no nav tree"};const r=ai(e);if(!r){const a=Ou(e);return a?(ui(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=gp(r.parent,t,r.node),o=n?!0:!s;return i&&o?(ui(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"failed to find node to focus"}}function gp(e,t,n){if(t===ot.Down||t===ot.Up){const i=t===ot.Down?Mf:Tf,s=t===ot.Down?1:-1,o=e.type==="1d"?0:qo(n.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?qo(n.coords.x+s,{min:0,max:e.children.length-1}):a&&n.coords.x>=a.length?a.length-1:n.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],f=e.type==="1d"?i(u.x,n.coords.x):i(u.y,n.coords.y);return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:f}}else{const i=t===ot.Right?Mf:Tf,s=t===ot.Right?1:-1,o=e.type==="1d"?e.children:e.children[n.coords.y];Cr.isDefined(o,`No current row found at y index: '${n.coords.y}'`);const a={x:qo(n.coords.x+s,{min:0,max:o.length-1}),y:n.coords.y},u=i(a.x,n.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:u}}}function NA(e,t,n,r){const i=E.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from"};const{nextNode:o,requiresWrapping:a}=gp(i,n,s),u=o?.isGroup?Ou(o):o,l=r?!0:!a;return u?l?(ui(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a}):{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"no node to navigate to"}}class wp{rootElement;constructor(t){this.rootElement=t}getCurrentlyFocused(){return ai(this.buildNavTree())}buildNavTree(){return TA(this.rootElement)}navigate({direction:t,allowWrapping:n}){return Nf(this.buildNavTree(),t,n)}enterInto(){return SA(this.buildNavTree())}exitOutOf(){return FA(this.buildNavTree())}navigatePibling({allowWrapping:t,direction:n}){const r=this.buildNavTree(),i=ai(r);return!i||!r?Nf(r,n,t):NA(r,i,n,t)}}const xA={option:"dropdown-option"},Ki=Qt()({tagName:"vira-dropdown-options",events:{selectionChange:At()},styles:T`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${yt["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${ln["vira-form-background-color"].value};
            border: 1px solid ${ln["vira-form-border-color"].value};
            color: ${ln["vira-form-foreground-color"].value};
            ${fp.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Ga.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${ln["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Wt} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Eo};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:n}){const r=e.options.map(i=>{const s=i.template||D`
                    <${Wt.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${Wt}>
                `;return D`
                <div
                    class="dropdown-item ${ii({disabled:!!i.disabled})}"
                    ${_r(xA.option)}
                    title=${Vm(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?ce:$A()}
                    ${ne("mousedown",o=>{o.stopPropagation()})}
                    ${ne("mouseup",o=>{o.stopPropagation(),i.disabled||t(new n.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return D`
            <slot>${r}</slot>
        `}}),PA=de({name:"Chat24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),yp=de({name:"ChevronUp24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${k["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),bp=de({name:"CloseX24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),BA=de({name:"Commit24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),LA=de({name:"Document24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Ep=de({name:"Element16Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jt=de({name:"Element24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),vp=de({name:"EyeClosed24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Dp=de({name:"EyeOpen24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),Ap=de({name:"Loader24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),IA=T`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Et["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,li=de({name:"LoaderAnimated24Icon",svgTemplate:D`
        <style>
            ${IA}
        </style>
        ${Ap.svgTemplate}
    `}),Vu=de({name:"Options24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),RA=de({name:"Pencil24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),OA=de({name:"Shield24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),VA=de({name:"SpeakerLoud24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),_A=de({name:"SpeakerMedium24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),UA=de({name:"SpeakerMuted24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),WA=de({name:"SpeakerQuiet24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),qA=de({name:"Star24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Ms=de({name:"StatusFailure24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jA=de({name:"StatusInProgress24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),zA=de({name:"StatusSuccess24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ka={Chat24Icon:PA,Check24Icon:cp,ChevronUp24Icon:yp,CloseX24Icon:bp,Commit24Icon:BA,Document24Icon:LA,Element16Icon:Ep,Element24Icon:jt,EyeClosed24Icon:vp,EyeOpen24Icon:Dp,Loader24Icon:Ap,LoaderAnimated24Icon:li,Options24Icon:Vu,Pencil24Icon:RA,Shield24Icon:OA,SpeakerLoud24Icon:VA,SpeakerMedium24Icon:_A,SpeakerMuted24Icon:UA,SpeakerQuiet24Icon:WA,Star24Icon:qA,StatusFailure24Icon:Ms,StatusInProgress24Icon:jA,StatusSuccess24Icon:zA};class GA extends Om{constructor(){super({defaultValue:document.hidden,equalityCheck:E.strictEquals}),globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n));const t=n=>this.updateVisibility(n);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const n=ZA.includes(t.type),r=KA.includes(t.type),i=n?!0:r?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const KA=["blur","focusout","pagehide"],ZA=["focus","focusin","pageshow"],YA=new GA;function JA(e,t){return YA.listen(e,t)}const xf={top:0,left:0,right:0,bottom:0};class $p extends Vh("hide-pop-up"){}class Cp extends Oh()("nav-select"){}class HA{listenTarget=new F0;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const n=new wp(t);this.cleanupCallbacks=[JA(!1,r=>{r||this.removePopUp()}),Xl("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Xl("keydown",r=>{const i=r.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:ot.Down,allowWrapping:!1});else if(i==="ArrowUp")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:ot.Up,allowWrapping:!1});else if(i==="ArrowLeft")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:ot.Left,allowWrapping:!1});else if(i==="ArrowRight")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:ot.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=n.getCurrentlyFocused();s&&(n.enterInto(),this.listenTarget.dispatch(new Cp({detail:s.node.coords})),r.stopImmediatePropagation(),r.preventDefault())}}})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new $p)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=_5(t);Cr.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},f=ke(xf,p=>s[p]),c=ke(xf,p=>{const b=l[p],v=f[p];return Math.abs(b-v)}),d=c.top>c.bottom+r.verticalDiffThreshold&&c.bottom<r.minDownSpace;return this.attachGlobalListeners(t),{popDown:!d,positions:{container:l,root:f,diff:c}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function QA({selected:e,options:t,isMultiSelect:n}){if(e.length&&t.length){const r=t.filter(i=>e.includes(i.id));return r.length>1&&!n?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),r.slice(0,1)):r}else return[]}function XA(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${v1(n)}`)}function Pf(e,t,n){return n?t.includes(e)?t.filter(r=>r!==e):[...t,e]:[e]}function Bf({open:e,emitEvent:t},{updateState:n,popUpManager:r,dispatch:i,host:s}){e?n({showPopUpResult:r.showPopUp(s)}):r.removePopUp(),t&&i(e)}const Zi={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Wr=Qt()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>T`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${On["vira-focus-outline-color"].name}: ${ln["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${un};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${yt["vira-form-input-radius"].value};
            transition: border-radius
                ${Et["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${Ru({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${Et["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${ln["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${oi};
            border-radius: inherit;
            background-color: ${ln["vira-form-background-color"].value};
            color: ${ln["vira-form-foreground-color"].value};
        }

        .open-upwards ${Ki} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${fp.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Eo}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
            left: 0;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:At(),openChange:At()},stateInitStatic:{showPopUpResult:void 0,popUpManager:$5(()=>new HA),navController:void 0},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:s}){e.popUpManager.listen($p,()=>{if(t({showPopUpResult:void 0}),!r.isDisabled){const o=n.shadowRoot.querySelector(".dropdown-wrapper");Cr.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(Cp,o=>{const a=o.detail.x,u=r.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);r.isMultiSelect||Bf({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:n,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Pf(u.id,r.selected,!!r.isMultiSelect)))}),t({navController:new wp(n)})},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:s}){XA(r.options);function o(b){Bf(b,{dispatch:v=>{e(new t.openChange(v))},host:s,popUpManager:n.popUpManager,updateState:i})}r.isDisabled?o({open:!1,emitEvent:!1}):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?o({emitEvent:!1,open:!1}):r.z_debug_forceOpenState&&!n.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=QA(r),u=r.icon?D`
                  <${V.assign({icon:r.icon})}
                      ${_r(Zi.icon)}
                  ></${V}>
              `:"",l=n.showPopUpResult?n.showPopUpResult.popDown?T`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                  `:T`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                  `:void 0;function f(){o({emitEvent:!0,open:!n.showPopUpResult})}const c=!a.length,d=r.selectionPrefix&&!c?D`
                      <span class="selected-label-prefix" ${_r(Zi.prefix)}>
                          ${r.selectionPrefix}
                      </span>
                  `:"",p=c?r.placeholder||"":a.map(b=>b.label).join(", ");return D`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${ii({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                ${_r(Zi.trigger)}
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${ne("keydown",b=>{!n.showPopUpResult&&b.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${ne("click",b=>{b.detail===0&&f()})}
                ${ne("mousedown",b=>{b.button===0&&f()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${ii({"using-placeholder":c})}"
                        title=${Vm(c?p:void 0)}
                    >
                        ${d} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${V.assign({icon:yp})}
                            class="trigger-icon"
                        ></${V}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${qe(!!n.showPopUpResult,D`
                            <${Ki.assign({options:r.options,selectedOptions:a})}
                                ${ne(Ki.events.selectionChange,b=>{r.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(Pf(b.detail.id,r.selected,!!r.isMultiSelect)))})}
                                ${_r(Zi.options)}
                            ></${Ki}>
                        `)}
                </div>
            </button>
        `}});var kp=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(kp||{});const ve=Qt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>T`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${oi};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${On["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Eo};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${un};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${yt["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Et["vira-interaction-animation-duration"].value},
                background-color
                    ${Et["vira-interaction-animation-duration"].value},
                border-color ${Et["vira-interaction-animation-duration"].value};
        }

        ${Ru({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${V} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?D`
                  <${V.assign({icon:e.icon})}></${V}>
              `:"",n=e.text?D`
                  <span class="text-template">${e.text}</span>
              `:"";return D`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}}),It=Qt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>T`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${un};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Et["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:At()},stateInitStatic:{contentHeight:0},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:s}){const o=s.expanded?T`
                  height: ${e.contentHeight}px;
              `:T`
                  height: 0;
              `;return D`
            <button
                class="header-wrapper"
                ${ne("click",()=>{r(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${Qm(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),tn=Qt()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:At(),imageError:At()},styles:({hostClasses:e})=>T`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?D`
                  <slot class="status-wrapper" name=${s.error}>
                      <${V.assign({icon:Ms})} class="error"></${V}>
                  </slot>
              `:t.loadedUrls[o]?void 0:D`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${V.assign({icon:li})}></${V}>
                    </slot>
                `;return D`
            ${qe(!!a,a)}
            <img
                class=${ii({hidden:!!a})}
                ${ne("load",async()=>{e._debugLoadDelay&&await Jr(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[o]:!0}}),r(new i.imageLoad)})}
                ${ne("error",async u=>{e._debugLoadDelay&&await Jr(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[o]:!0}}),r(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function Za({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Za({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function e$({value:e,allowed:t,blocked:n}){const r=t?Za({input:e,matcher:t}):!0,i=n?Za({input:e,matcher:n}):!1;return r&&!i}function Ya(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(e$({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function t$({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){if(!(n instanceof InputEvent))throw new TypeError("Text input event was not an InputEvent.");const s=Ur(n,HTMLInputElement),o=n.data;if(o){const{blocked:u}=Ya({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=Ya({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var Sp=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Sp||{});const he=Qt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":On["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:At(),inputBlocked:At()},styles:({hostClasses:e,cssVars:t})=>T`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${On["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Eo};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${un};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${oi};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${un};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${yt["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Et["vira-interaction-animation-duration"].value};
            }

            label {
                ${un};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${yt["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Ru({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${un};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${oi};
            }

            button {
                ${un};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Et["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i})=>{const{filtered:s}=Ya({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?D`
                  <${V.assign({icon:e.icon})} class="left-side-icon"></${V}>
              `:"",a=e.fitText?T`
                  width: ${n.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type==="password";return D`
            <label>
                ${o}
                ${qe(!!e.fitText,D`
                        <span
                            class="size-span"
                            ${Qm(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${n$(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${ne("input",l=>{t$({inputs:e,previousValue:s,event:l,inputBlockedCallback(f){t(new i.inputBlocked(f))},newValueCallback(f){t(new i.valueChange(f))}})})}
                    placeholder=${e.placeholder}
                />
                ${qe(!!(e.showClearButton&&e.value),D`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${ne("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${V.assign({icon:bp})}></${V}>
                        </button>
                    `)}
                ${qe(e.type==="password",D`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${ne("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${V.assign({icon:n.showPassword?Dp:vp})}></${V}>
                        </button>
                    `)}
                ${qe(!!e.suffix,D`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function n$(e,t){return e==="password"&&t?"text":e||"text"}const Yi=Qt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>T`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(n){e.route&&e.route.router.setRouteOnDirectNavigation(e.route.route,n)&&e.route.scrollToTop&&window.scrollTo(0,0)}if(e.link?.newTab)return D`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return D`
                <a href=${n} rel="noopener noreferrer" ${ne("click",t)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:ct}=Xm(),at=ct()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>T`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return D`
            <a
                href=${n}
                ${ne("click",r=>{(!e.router||lp(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new Ts(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function r$(e,t){return e.entry.entryType===Me.Root?!1:e.entry.entryType===Me.Page||E.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:E.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Vt=ct()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>T`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Q["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Q["element-book-nav-hover-background-color"].value};
            color: ${Q["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Q["element-book-nav-active-background-color"].value};
            color: ${Q["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${at.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Q["element-book-nav-selected-background-color"].value};
            color: ${Q["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${V} {
            display: inline-flex;
            color: ${Q["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!r$(n,e.selectedPath))return;const r=T`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return D`
                <li style=${r}>
                    <${at.assign({router:e.router,route:{paths:[gt.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${ii({"title-row":!0,selected:e.selectedPath?E.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${qe(or(n,Me.ElementExample),D`
                                    <${V.assign({icon:Ep})}></${V}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${at}>
                </li>
            `});return D`
            <${at.assign({route:hr,router:e.router})}>
                <slot name=${qt.NavHeader}>Book</slot>
            </${at}>
            <ul>
                ${t}
            </ul>
        `}});async function i$(e){await qa(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await O5(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const wn=ct()({tagName:"book-error",styles:T`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(E.isArray(e.message)?e.message:[e.message]).map(n=>D`
                <p>${n}</p>
            `)}}),ci=ct()({tagName:"book-page-controls",events:{controlValueChange:At()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>T`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Q["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${he} {
            height: 24px;
            max-width: 128px;
        }

        ${V}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],s)=>{if(i.controlType===X.Hidden)return"";const o=s$(e.currentValues[r],i,a=>{const u=E.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return D`
                    <div class="control-wrapper">
                        ${qe(s===0,D`
                                <${V.assign({icon:Vu})}
                                    class="options-icon"
                                ></${V}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function s$(e,t,n){return jn(t,X.Hidden)?"":jn(t,X.Checkbox)?D`
            <input
                type="checkbox"
                .value=${e}
                ${ne("input",r=>{const i=Ur(r,HTMLInputElement);n(i.checked)})}
            />
        `:jn(t,X.Color)?D`
            <input
                type="color"
                .value=${e}
                ${ne("input",r=>{const i=Ur(r,HTMLInputElement);n(i.value)})}
            />
        `:jn(t,X.Text)?D`
            <${he.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${ne(he.events.valueChange,r=>{n(r.detail)})}
            ></${he}>
        `:jn(t,X.Number)?D`
            <input
                type="number"
                .value=${e}
                ${ne("input",r=>{const i=Ur(r,HTMLInputElement);n(i.value)})}
            />
        `:jn(t,X.Dropdown)?D`
            <select
                .value=${e}
                ${ne("input",r=>{const i=Ur(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>D`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:D`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Lf=ct()({tagName:"book-breadcrumbs",styles:T`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const s=r>=i.length-1,o=i.slice(0,r+1),a=s?"":D`
                      <span class="spacer">&gt;</span>
                  `;return D`
                <${at.assign({route:{hash:void 0,search:void 0,paths:[gt.Book,...o]},router:e.router})}>
                    ${n}
                </${at}>
                ${a}
            `}):D`
                &nbsp;
            `}}),la=ct()({tagName:"book-breadcrumbs-bar",styles:T`
        :host {
            border-bottom: 1px solid
                ${Q["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Q["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return D`
            ${qe(!!e.currentSearch,D`
                    &nbsp;
                `,D`
                    <${Lf.assign({currentRoute:e.currentRoute,router:e.router})}></${Lf}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${ne("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Jr({milliseconds:200}),r.value===i&&(r.value?t(new Ts({paths:[gt.Search,encodeURIComponent(r.value)]})):t(new Ts(hr)))})}
            />
        `}}),If=ct()({tagName:"book-entry-description",styles:T`
        :host {
            color: ${Q["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Q["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>D`
                <p>${t}</p>
            `)}}),Rf=ct()({tagName:"book-page-wrapper",styles:T`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${at} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?D`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:D`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[gt.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Fh(e.pageNode.entry.errors):void 0;return r&&console.error(r),D`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${at.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${at}>
                    ${r?D`
                              <${wn.assign({message:r.message})}></${wn}>
                          `:D`
                              <${If.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${If}>
                              <${ci.assign({config:e.pageNode.entry.controls,currentValues:pu(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ci}>
                          `}
                </div>
            </div>
        `}}),Ji=ct()({tagName:"book-element-example-controls",styles:T`
        :host {
            display: flex;
            color: ${Q["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[gt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return D`
            <${at.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${at}>
        `}}),Of=Symbol("unset-internal-state"),Vf=ct()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Of},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Fh(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Of&&n({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return D`
                ${qe(!!t.elementExampleNode.entry.styles,D`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",Le(r)),console.error(r),D`
                <${wn.assign({message:`${t.elementExampleNode.entry.title} failed: ${Le(r)}`})}></${wn}>
            `}},options:{allowPolymorphicState:!0}}),_f=ct()({tagName:"book-element-example-wrapper",styles:T`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Ji} {
            color: ${Q["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ji} {
            color: ${Q["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return D`
            <div class="individual-example-wrapper">
                <${Ji.assign(h1(e,["currentPageControls"]))}></${Ji}>
                <${Vf.assign(e)}></${Vf}>
            </div>
        `}});function Fp(e,t,n,r){const i=$a(n,r),s=[];if(i){const o=Fp(e,t,i,r);o&&s.push(o)}if(or(n,Me.Page)&&!e.includes(n)){const o=pu(t,n.fullUrlBreadcrumbs);s.push({config:n.entry.controls,current:o,breadcrumbs:ke(o,()=>n.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function o$({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:s}){if(!e.length&&r)return[D`
                No results
            `];const o=E.isLengthAtLeast(e,1)?Fp(e,i,e[0],s):void 0,a=o&&Object.values(o.config).length&&E.isLengthAtLeast(e,1)?D`
                  <${ci.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${ci}>
              `:ce,u=b5(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(or(l,Me.Page))return D`
                    <${Rf.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${Rf}>
                `;if(or(l,Me.ElementExample)){const f=pu(i,l.fullUrlBreadcrumbs.slice(0,-1));return D`
                    <${_f.assign({elementExampleNode:l,currentPageControls:f,router:n})}
                        class="inline-entry"
                    ></${_f}>
                `}else return or(l,Me.Root)?ce:D`
                    <${wn.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${wn}>
                `});return[a,u]}const Yn=ct()({tagName:"book-entry-display",styles:T`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${la} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Et["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:At()},stateInitStatic:{lastElement:void 0},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const s=Ca(e.currentRoute.paths),o=o$({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return D`
            <${la.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${la}>

            ${qe(e.showLoading,D`
                    <div
                        ${bf(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${V.assign({icon:li})}></${V}>
                    </div>
                    ${qe(!!r.lastElement,D`
                            ${r.lastElement}
                            <slot name=${qt.Footer}></slot>
                        `)}
                `,D`
                    <div
                        ${bf(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${qt.Footer}></slot>
                `)}
        `}});function a$(e,t,n){const r=Uf(e,t);return r.length?r:(n(hr),Uf(e,hr.paths))}function Uf(e,t){return e.filter(n=>Gb({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const ca=Hm()({tagName:"element-book-app",events:{pathUpdate:At()},stateInitStatic:{currentRoute:hr,router:void 0,loading:!0,colors:{config:void 0,theme:Ef(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:T`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Q["element-book-page-background-color"].value};
            color: ${Q["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Yn} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Vt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await Wf(e,Ca(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function o(f){return{...e.currentRoute,...f}}function a(f){const c=o(f);return!E.jsonEquals(e.currentRoute,c)}function u(f){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,f].filter(E.isTruthy).join(" - "))}function l(f){if(!a(f))return;const c=o(f);e.router?e.router.setRoute(c):r({currentRoute:{...e.currentRoute,...c}}),t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(c.paths))}try{if(t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const $=dA(t.internalRouterConfig.basePath);r({router:$}),$.listen(!0,M=>{r({currentRoute:M})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const f={themeColor:t.themeColor};if(!E.jsonEquals(f,e.colors.config)){const $=Ef(f);r({colors:{config:f,theme:$}}),CE(n,$)}const c=t._debug??!1,d=Hb({entries:t.pages,debug:c});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:P0(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=Ca(e.currentRoute.paths),v=(p?H5({flattenedNodes:d.flattenedNodes,searchQuery:p}):void 0)??a$(d.flattenedNodes,e.currentRoute.paths,l);u(v[0]?.entry.title);const C=e.treeBasedControls?.controls;return C?(t._debug&&console.info({currentControls:C}),D`
                <div
                    class="root"
                    ${ne(Ts,async $=>{const M=$.detail;if(!a(M))return;if(r({loading:!0}),l(M),!(n.shadowRoot.querySelector(Vt.tagName)instanceof Vt))throw new TypeError(`Failed to find child '${Vt.tagName}'`);await Wf(n,p,e.currentRoute)})}
                    ${ne(ci.events.controlValueChange,$=>{if(!e.treeBasedControls)return;const M=Xb(C,$.detail.fullUrlBreadcrumbs,$.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:M}})})}
                >
                    <${Vt.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${qt.NavHeader}
                            slot=${qt.NavHeader}
                        ></slot>
                    </${Vt}>
                    <${Yn.assign({controls:C,currentNodes:v,currentRoute:e.currentRoute,debug:c,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${ne(Yn.events.loadingRender,async $=>{await qa();const M=n.shadowRoot.querySelector(Yn.tagName);M?M.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Yn.tagName}' for scrolling.`),await qa(),r({loading:!$.detail})})}
                    >
                        <slot
                            name=${qt.Footer}
                            slot=${qt.Footer}
                        ></slot>
                    </${Yn}>
                </div>
            `):D`
                    <${wn.assign({message:"Failed to generate page controls."})}></${wn}>
                `}catch(f){return console.error(f),D`
                <p class="error">${Le(f)}</p>
            `}}});async function Wf(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(Vt.tagName);if(!(r instanceof Vt))throw new TypeError(`Failed to find child '${Vt.tagName}'`);await i$(r)}const En=$t({title:"Elements",parent:void 0}),_u=$t({parent:En,title:"Dropdown"}),u$=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:D`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:T`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:T`
            ${Wt} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],l$=$t({title:Wt.tagName,parent:_u,controls:{Selected:{controlType:X.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:X.Text,initValue:""}},defineExamples({defineExample:e}){u$.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs.selected||[]},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?D`
                            <${Wt.assign(r)}>
                                ${t.customTemplate}
                            </${Wt}>
                        `:D`
                            <${Wt.assign(r)}></${Wt}>
                        `}})})}}),Zr=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],c$=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Zr,{id:42,label:"custom template",template:D`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Zr,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:T`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:T`
            ${Wr} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:jt}}],f$=$t({title:Wr.tagName,parent:_u,controls:{Selected:{controlType:X.Dropdown,initValue:"",options:["",...Zr.map(e=>e.label)]},Prefix:{controlType:X.Text,initValue:""},"Force State":{controlType:X.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:X.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:X.Dropdown,initValue:"",options:["",...Object.keys(Ka)]},Disabled:{controlType:X.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:X.Text,initValue:"Select something"}},defineExamples({defineExample:e}){c$.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs?.selected||[]},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const s={placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Zr,selected:i.Selected?[Zr.find(o=>o.label===i.Selected)?.id].filter(E.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?Ka[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return D`
                        <${Wr.assign(s)}
                            ${ne(Wr.events.selectedChange,o=>{r({selected:o.detail})})}
                        ></${Wr}>
                    `}})})}}),d$=$t({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:X.Color,initValue:""},"Fill Color":{controlType:X.Color,initValue:""},"Stroke Width":{controlType:X.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(Ka).forEach(t=>{e({title:t.name,styles:T`
                    :host(:hover) ${V} {
                        background-color: #f2f2f2;
                    }

                    ${V} {
                        padding: 8px;
                        border-radius: ${yt["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=T`
                        ${k["vira-icon-fill-color"].name}: ${we(n["Fill Color"]||"inherit")};
                        ${k["vira-icon-stroke-color"].name}: ${we(n["Stroke Color"]||"inherit")};
                        ${k["vira-icon-stroke-width"].name}: ${we(n["Stroke Width"]?Nh(n["Stroke Width"]):"inherit")};
                    `;return D`
                        <${V.assign({icon:t})} style=${r}></${V}>
                    `}})})}}),h$=$t({parent:En,title:ve.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:X.Color,initValue:ve.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:X.Color,initValue:ve.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:X.Color,initValue:ve.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:X.Color,initValue:ve.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const s=r??T``;e({title:n,styles:s,render({controls:o}){const a=T`
                        ${ve.cssVars["vira-button-primary-color"].name}: ${we(o["Primary color"]||"inherit")};
                        ${ve.cssVars["vira-button-secondary-color"].name}: ${we(o["Secondary color"]||"inherit")};
                        ${ve.cssVars["vira-button-primary-hover-color"].name}: ${we(o["Hover color"]||"inherit")};
                        ${ve.cssVars["vira-button-primary-active-color"].name}: ${we(o["Active color"]||"inherit")};
                    `;return D`
                        <${ve.assign({text:"hello",...i})}
                            style=${a}
                        ></${ve}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Vu}}),t({title:"outline",inputs:{buttonStyle:kp.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:T`
                ${ve} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:T`
                ${ve} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:T`
                :host {
                    ${ve.cssVars["vira-button-primary-color"].name}: pink;
                    ${ve.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ve.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ve.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return D`
                    <${ve.assign({text:"hello"})}></${ve}>
                `}})}}),m$=$t({title:It.tagName,parent:En,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:T`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>D`
                        <${It.assign({expanded:!!n.expandedStates[i]})}
                            ${ne(It.events.expandChange,s=>{const o=[...n.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${It.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${ne("click",()=>{const s=[...n.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${qe(!!n.showMoreStates[i],D`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${It}>
                    `)}}),e({title:"wider examples",styles:T`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>D`
                        <${It.assign({expanded:!!n.expandedStates[i]})}
                            ${ne(It.events.expandChange,s=>{const o=[...n.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${It.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${ne("click",()=>{const s=[...n.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${qe(!!n.showMoreStates[i],D`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${It}>
                    `)}})}}),p$=$t({title:V.tagName,parent:En,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return D`
                    <${V.assign({icon:jt})}></${V}>
                `}}),e({title:"using createColoredIcon",render(){return D`
                    <${V.assign({icon:Cf(jt,{"vira-icon-stroke-color":"red"})})}></${V}>
                `}}),e({title:"fit container",styles:T`
                ${V} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return D`
                    <${V.assign({icon:Cf(jt,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${V}>
                `}})}}),g$=$t({title:tn.tagName,parent:En,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:T`
                    border-radius: 32px;
                `,loadingSlot:D`
                    <div
                        style=${T`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${V.assign({icon:li,fitContainer:!0})}
                            style=${T`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:T`
                    border-radius: 32px;
                `,errorSlot:D`
                    <div
                        style=${T`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${V.assign({icon:Ms,fitContainer:!0})}
                            style=${T`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:T`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:T`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:T`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:D`
                    <div
                        style=${T`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${V.assign({icon:li,fitContainer:!0})}
                            style=${T`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `,errorSlot:D`
                    <div
                        style=${T`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${V.assign({icon:Ms,fitContainer:!0})}
                            style=${T`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:T`
                    ${tn} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||T``}
                    }

                    ${n.allowReload?T`
                              ${tn} {
                                  cursor: pointer;
                              }

                              ${tn}:hover {
                                  border-color: #0055ff;
                              }
                          `:T``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:n.inputs.imageUrl},render({state:r,updateState:i}){return D`
                        <${tn.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${ne("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Sh()}`})})}
                        >
                            ${n.loadingSlot?D`
                                      <div class="slot-wrapper" slot=${tn.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:""}${n.errorSlot?D`
                                      <div class="slot-wrapper" slot=${tn.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:""}
                        </${tn}>
                    `}})})}}),w$=$t({title:he.tagName,parent:En,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:X.Color,initValue:he.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:X.Color,initValue:he.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:X.Color,initValue:he.cssVars["vira-input-border-color"].default},"Focus color":{controlType:X.Color,initValue:he.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:X.Color,initValue:he.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:s}){e({title:i,styles:T`
                    ${r||T``}
                `,stateInitStatic:{value:s.value},render({state:o,updateState:a,controls:u}){const l={[String(he.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(he.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(he.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(he.cssVars["vira-input-focus-border-color"].name)]:u["Focus color"],[String(he.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},f=ke(l,(d,p)=>p||"inherit"),c=Object.entries(f).map(([d,p])=>[d,p].join(": ")+";").join(`
`);return D`
                        <${he.assign({...s,value:o.value})}
                            style=${c}
                            ${ne(he.events.valueChange,d=>{a({value:d.detail})})}
                        ></${he}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:jt}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:T`
                    ${he} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:jt}},{title:"taller height",styles:T`
                    ${he} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:jt}},{title:"shorter height",styles:T`
                    ${he} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:jt}},{title:"max width",styles:T`
                    ${he} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:T`
                    ${he} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Sp.Password}}].forEach(t)}}),y$=$t({title:Yi.tagName,parent:En,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:X.Color,initValue:""},"Hover color":{controlType:X.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const s=T`
                        ${Yi.cssVars["vira-link-hover-color"].name}: ${we(i["Hover color"]||"inherit")};
                        color: ${we(i["CSS Color"]||"inherit")};
                    `;return D`
                        <${Yi.assign(r)} style=${s}>My Link</${Yi}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),b$=[En,d$,_u,h$,m$,l$,f$,p$,g$,w$,y$].sort((e,t)=>e.title.localeCompare(t.title));go({tagName:"vira-book-app",styles:T`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ca} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return D`
            <${ca.assign({internalRouterConfig:{basePath:Lu("element-vir","vira"),useInternalRouter:!0},pages:b$,themeColor:"#33ccff"})}>
                <h1 slot=${qt.NavHeader}>Vira</h1>
            </${ca}>
        `}});
